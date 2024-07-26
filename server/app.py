import os
import re
import json
from flask import Flask, jsonify
from flask_cors import CORS
from oauth2client.service_account import ServiceAccountCredentials
import gspread

SPREADSHEET_ID = '18hT5RXZeErDR1OnVqRaRCzqzZY9J97EBi_WQV1oVYcA'
service_account_file = 'service_account.json'

app = Flask(__name__, static_folder='build')
CORS(app)

def clean_price(price_str):
    # Check if the price_str contains a range
    if ' - ' in price_str:
        low_price_str, _ = price_str.split(' - ')
        low_price = re.sub(r'[^\d.]', '', low_price_str)
        try:
            return float(low_price)
        except ValueError:
            return None
    else:
        cleaned_price_str = re.sub(r'[^\d.]', '', price_str)
        try:
            return float(cleaned_price_str)
        except ValueError:
            return None
        
def get_google_sheet_data():
    scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
    creds = ServiceAccountCredentials.from_json_keyfile_name(service_account_file, scope)
    client = gspread.authorize(creds)
    sheet = client.open_by_key(SPREADSHEET_ID)
    products = {}

    for worksheet in sheet.worksheets():
        sheet_values = worksheet.get_all_values()
        for row in sheet_values[1:]:
            if row[4] != 'None':  
                price = clean_price(row[4])
                discounted_price = clean_price(row[5]) if len(row) > 5 and row[5] else None

                product_details = {
                    "id": int(row[0]),
                    "brand": row[1],
                    "name": row[2],
                    "SKU": row[3],
                    "price": price,
                    "discountedPrice": discounted_price,
                    "imageURL": row[6] if len(row) > 6 else None
                }

                if len(row) > 7 and row[7]: 
                    base_product_name = row[7]
                    if base_product_name in products:
                        products[base_product_name]["variants"].append(product_details)
                    else:
                        products[base_product_name] = {
                            "id": None,
                            "brand": None,
                            "name": base_product_name,
                            "SKU": None,
                            "price": None,
                            "discountedPrice": None,
                            "imageURL": None,
                            "variants": [product_details]
                        }
                else:
                    products[product_details["name"]] = {
                        "id": product_details["id"],
                        "brand": product_details["brand"],
                        "name": product_details["name"],
                        "SKU": product_details["SKU"],
                        "price": product_details["price"],
                        "discountedPrice": product_details["discountedPrice"],
                        "imageURL": product_details["imageURL"],
                        "variants": []
                    }

    return list(products.values())

@app.route('/api/products', methods=['GET'])
def get_products():
    try:
        products = get_google_sheet_data()
        return jsonify(products)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/products/<int:product_id>', methods=['GET'])
def get_product_by_id(product_id):
    try:
        product = find_product_by_id(product_id)
        return jsonify(product)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/products/all/<int:product_id>', methods=['GET'])
def get_all_products_by_id(product_id):
    try:
        products = find_all_products_by_id(product_id)
        return jsonify(products)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

def find_product_by_id(product_id):
    sa = gspread.service_account(filename=service_account_file)
    sh = sa.open_by_key(SPREADSHEET_ID)
    product_details = None

    for sheet in sh.worksheets():
        sheet_values = sheet.get_all_values()
        for row in sheet_values[1:]:
            if row[0].strip() == str(product_id):
                product_details = {
                    "Product_ID": row[0],
                    "Variant_URL": row[1],
                    "Product_Title": row[2],
                    "Product_SKU": row[3],
                    "Product_Price": row[4],
                    "Discounted_Price": row[5],
                    "Image_URL": row[6]
                }
                break
        if product_details:
            break

    return product_details if product_details else {"error": "Product not found."}

def find_all_products_by_id(product_id):
    sa = gspread.service_account(filename=service_account_file)
    sh = sa.open_by_key(SPREADSHEET_ID)
    products_found = []

    for sheet in sh.worksheets():
        sheet_values = sheet.get_all_values()
        for row in sheet_values[1:]:
            if row[0].strip() == str(product_id):
                product_details = {
                    "Sheet_Name": sheet.title,
                    "Product_ID": row[0],
                    "Variant_URL": row[1],
                    "Product_Title": row[2],
                    "Product_SKU": row[3],
                    "Product_Price": row[4],
                    "Discounted_Price": row[5],
                    "Image_URL": row[6]
                }
                products_found.append(product_details)

    return products_found if products_found else {"error": "Product not found in any sheet."}

if __name__ == '__main__':
    app.run(debug=True)
