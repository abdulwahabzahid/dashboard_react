
const getRandomPrice = () => {
    return Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
};

const applyDiscount = (price, discountPercentage) => {
    return price - (price * discountPercentage / 100);
};

const initialProducts = [
    // { id: 1, brand: "Grower's Choice", name: "Grower's Choice Bloom Boost UV-R Bar", competitors: [
    //     { name: 'Hydrobuilder', price: getRandomPrice() },
    //     { name: 'Sylvane', price: getRandomPrice() },
    //     { name: 'Trimleaf', price: getRandomPrice() },
    //     { name: 'Greenthumbdepot', price: getRandomPrice() }
    // ] },
    { id: 1, brand: "Grower's Choice", name: "Grower's Choice Bloom Boost UV-R Bar", SKU: "GC-BB-UVR", price: getRandomPrice(), discountedPrice: applyDiscount(getRandomPrice(), 10), competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ], variants: [
        { name: 'Variant 1', SKU: "GC-BB-UVR-V1", price: getRandomPrice(), competitors: [
            { name: 'Hydrobuilder', price: getRandomPrice() },
            { name: 'Sylvane', price: getRandomPrice() },
            { name: 'Trimleaf', price: getRandomPrice() },
            { name: 'Greenthumbdepot', price: getRandomPrice() }
        ] },
        { name: 'Variant 2', SKU: "GC-BB-UVR-V2", price: getRandomPrice(), competitors: [
            { name: 'Hydrobuilder', price: getRandomPrice() },
            { name: 'Sylvane', price: getRandomPrice() },
            { name: 'Trimleaf', price: getRandomPrice() },
            { name: 'Greenthumbdepot', price: getRandomPrice() }
        ] }
    ] },
    { id: 2, brand: "Grower's Choice", name: "Grower's Choice 730W GHS-730 LED Grow Light", SKU: "GC-730W-GHS", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ], variants: [
        { name: 'Variant 1', SKU: "GC-730W-GHS-V1", price: getRandomPrice(), competitors: [
            { name: 'Hydrobuilder', price: getRandomPrice() },
            { name: 'Sylvane', price: getRandomPrice() },
            { name: 'Trimleaf', price: getRandomPrice() },
            { name: 'Greenthumbdepot', price: getRandomPrice() }
        ] },
        { name: 'Variant 2', SKU: "GC-730W-GHS-V2", price: getRandomPrice(), competitors: [
            { name: 'Hydrobuilder', price: getRandomPrice() },
            { name: 'Sylvane', price: getRandomPrice() },
            { name: 'Trimleaf', price: getRandomPrice() },
            { name: 'Greenthumbdepot', price: getRandomPrice() }
        ] }
    ] },
    { id: 3, brand: "Grower's Choice", name: "Grower's Choice Digital Lighting Master Controller", SKU: "GC-DLMC", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ], variants: [
        { name: 'Variant 1', SKU: "GC-DLMC-V1", price: getRandomPrice(), competitors: [
            { name: 'Hydrobuilder', price: getRandomPrice() },
            { name: 'Sylvane', price: getRandomPrice() },
            { name: 'Trimleaf', price: getRandomPrice() },
            { name: 'Greenthumbdepot', price: getRandomPrice() }
        ] },
        { name: 'Variant 2', SKU: "GC-DLMC-V2", price: getRandomPrice(), competitors: [
            { name: 'Hydrobuilder', price: getRandomPrice() },
            { name: 'Sylvane', price: getRandomPrice() },
            { name: 'Trimleaf', price: getRandomPrice() },
            { name: 'Greenthumbdepot', price: getRandomPrice() }
        ] }
    ] },
    { id: 4, brand: "Grower's Choice", name: "Grower's Choice TSL PFS Series LED Grow Light - 4 Unit Combo", SKU: "GC-TSL-PFS-4U", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ], variants: [
        { name: 'Variant 1', SKU: "GC-TSL-PFS-4U-V1", price: getRandomPrice(), competitors: [
            { name: 'Hydrobuilder', price: getRandomPrice() },
            { name: 'Sylvane', price: getRandomPrice() },
            { name: 'Trimleaf', price: getRandomPrice() },
            { name: 'Greenthumbdepot', price: getRandomPrice() }
        ] },
        { name: 'Variant 2', SKU: "GC-TSL-PFS-4U-V2", price: getRandomPrice(), competitors: [
            { name: 'Hydrobuilder', price: getRandomPrice() },
            { name: 'Sylvane', price: getRandomPrice() },
            { name: 'Trimleaf', price: getRandomPrice() },
            { name: 'Greenthumbdepot', price: getRandomPrice() }
        ] }
    ] },
    { id: 5, brand: "Grower's Choice", name: "Grower's Choice ROI-E420 Horticulture LED Grow Light", SKU: "GC-ROI-E420", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ], variants: [
        { name: 'Variant 1', SKU: "GC-ROI-E420-V1", price: getRandomPrice(), competitors: [
            { name: 'Hydrobuilder', price: getRandomPrice() },
            { name: 'Sylvane', price: getRandomPrice() },
            { name: 'Trimleaf', price: getRandomPrice() },
            { name: 'Greenthumbdepot', price: getRandomPrice() }
        ] },
        { name: 'Variant 2', SKU: "GC-ROI-E420-V2", price: getRandomPrice(), competitors: [
            { name: 'Hydrobuilder', price: getRandomPrice() },
            { name: 'Sylvane', price: getRandomPrice() },
            { name: 'Trimleaf', price: getRandomPrice() },
            { name: 'Greenthumbdepot', price: getRandomPrice() }
        ] }
    ] },
    { id: 6, brand: "Grower's Choice", name: "Grower's Choice 680W ROI-E680S LED Grow Light", SKU: "GC-680W-ROI-E680S", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ], variants: [
        { name: 'Variant 1', SKU: "GC-680W-ROI-E680S-V1", price: getRandomPrice(), competitors: [
            { name: 'Hydrobuilder', price: getRandomPrice() },
            { name: 'Sylvane', price: getRandomPrice() },
            { name: 'Trimleaf', price: getRandomPrice() },
            { name: 'Greenthumbdepot', price: getRandomPrice() }
        ] },
        { name: 'Variant 2', SKU: "GC-680W-ROI-E680S-V2", price: getRandomPrice(), competitors: [
            { name: 'Hydrobuilder', price: getRandomPrice() },
            { name: 'Sylvane', price: getRandomPrice() },
            { name: 'Trimleaf', price: getRandomPrice() },
            { name: 'Greenthumbdepot', price: getRandomPrice() }
        ] }
    ] },
    { id: 7, brand: "Grower's Choice", name: "Grower's Choice ROI-E720 Horticulture LED Grow Light", SKU: "GC-ROI-E720", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ], variants: [
        { name: 'Variant 1', SKU: "GC-ROI-E720-V1", price: getRandomPrice(), competitors: [
            { name: 'Hydrobuilder', price: getRandomPrice() },
            { name: 'Sylvane', price: getRandomPrice() },
            { name: 'Trimleaf', price: getRandomPrice() },
            { name: 'Greenthumbdepot', price: getRandomPrice() }
        ] },
        { name: 'Variant 2', SKU: "GC-ROI-E720-V2", price: getRandomPrice(), competitors: [
            { name: 'Hydrobuilder', price: getRandomPrice() },
            { name: 'Sylvane', price: getRandomPrice() },
            { name: 'Trimleaf', price: getRandomPrice() },
            { name: 'Greenthumbdepot', price: getRandomPrice() }
        ] }
    ] },
    { id: 8, brand: "Grower's Choice", name: "Grower's Choice ROI-E900 LED Grow Light", SKU: "GC-ROI-E900", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ], variants: [
        { name: 'Variant 1', SKU: "GC-ROI-E900-V1", price: getRandomPrice(), competitors: [
            { name: 'Hydrobuilder', price: getRandomPrice() },
            { name: 'Sylvane', price: getRandomPrice() },
            { name: 'Trimleaf', price: getRandomPrice() },
            { name: 'Greenthumbdepot', price: getRandomPrice() }
        ] },
        { name: 'Variant 2', SKU: "GC-ROI-E900-V2", price: getRandomPrice(), competitors: [
            { name: 'Hydrobuilder', price: getRandomPrice() },
            { name: 'Sylvane', price: getRandomPrice() },
            { name: 'Trimleaf', price: getRandomPrice() },
            { name: 'Greenthumbdepot', price: getRandomPrice() }
        ] }
    ] },
    { id: 9, brand: "Grower's Choice", name: "Grower's Choice 800W TSL-800 LED Grow Light", SKU: "GC-800W-TSL-800", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ], variants: [
        { name: 'Variant 1', SKU: "GC-800W-TSL-800-V1", price: getRandomPrice(), competitors: [
            { name: 'Hydrobuilder', price: getRandomPrice() },
            { name: 'Sylvane', price: getRandomPrice() },
            { name: 'Trimleaf', price: getRandomPrice() },
            { name: 'Greenthumbdepot', price: getRandomPrice() }
        ] },
        { name: 'Variant 2', SKU: "GC-800W-TSL-800-V2", price: getRandomPrice(), competitors: [
            { name: 'Hydrobuilder', price: getRandomPrice() },
            { name: 'Sylvane', price: getRandomPrice() },
            { name: 'Trimleaf', price: getRandomPrice() },
            { name: 'Greenthumbdepot', price: getRandomPrice() }
        ] }
    ] },
    { id: 10, brand: "Grower's Choice", name: "Grower's Choice Pro Pod Clone & Propagation Lighting System", SKU: "GC-PP-CPLS", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ], variants: [
        { name: 'Variant 1', SKU: "GC-PP-CPLS-V1", price: getRandomPrice(), competitors: [
            { name: 'Hydrobuilder', price: getRandomPrice() },
            { name: 'Sylvane', price: getRandomPrice() },
            { name: 'Trimleaf', price: getRandomPrice() },
            { name: 'Greenthumbdepot', price: getRandomPrice() }
        ] },
        { name: 'Variant 2', SKU: "GC-PP-CPLS-V2", price: getRandomPrice(), competitors: [
            { name: 'Hydrobuilder', price: getRandomPrice() },
            { name: 'Sylvane', price: getRandomPrice() },
            { name: 'Trimleaf', price: getRandomPrice() },
            { name: 'Greenthumbdepot', price: getRandomPrice() }
        ] }
    ] },

    { id: 11, brand: "Quest", name: "Quest 225 Dual Overhead Dehumidifier", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ] },
    { id: 12, brand: "Quest", name: "Quest 335 Overhead Dehumidifier 277 Volt", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ] },
    { id: 13, brand: "Quest", name: "Quest 506 High-Efficiency Overhead Dehumidifier - 277V", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ] },
    { id: 14, brand: "Quest", name: "Quest 70 Pint Dehumidifier", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ] },
    { id: 15, brand: "Quest", name: "Quest 746 Overhead Dehumidifier", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ] },
    { id: 16, brand: "Quest", name: "Quest 876 High-Efficiency Overhead Dehumidifier", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ] },
    { id: 17, brand: "Quest", name: "Quest CDG 174 Portable Series Dehumidifier", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ] },
    { id: 18, brand: "Quest", name: "Quest HI-E DRY 195 Portable Series Dehumidifier", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ] },

    { id: 19, brand: "CenturionPro", name: "Centurion Pro Dry Batch Model 5 Trimming Machine", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ] },
    { id: 20, brand: "CenturionPro", name: "Centurion Pro Gladiator Stainless Steel Trimming Machine", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ] },
    { id: 21, brand: "CenturionPro", name: "Centurion Pro Gladiator Trimming Machine", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ] },
    { id: 22, brand: "CenturionPro", name: "Centurion Pro Mini Stainless Steel Trimming Machine", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ] },
    { id: 23, brand: "CenturionPro", name: "Centurion Pro Mini Trimming Machine", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ] },
    { id: 24, brand: "CenturionPro", name: "Centurion Pro Original Stainless Steel Trimming Machine", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ] },
    { id: 25, brand: "CenturionPro", name: "Centurion Pro Original Trimming Machine", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ] },
    { id: 26, brand: "CenturionPro", name: "Centurion Pro Silver Bullet Trimming Machine", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ] },
    { id: 27, brand: "CenturionPro", name: "Centurion Pro Tabletop Trimming Machine", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ] },
    { id: 28, brand: "CenturionPro", name: "Centurion Pro XL 5.0 & 10.0 Trimming Machines", competitors: [
        { name: 'Hydrobuilder', price: getRandomPrice() },
        { name: 'Sylvane', price: getRandomPrice() },
        { name: 'Trimleaf', price: getRandomPrice() },
        { name: 'Greenthumbdepot', price: getRandomPrice() }
    ] },
];
    
export default initialProducts