const db = require("../models");
const areas = db.areas;
const Op = db.Sequelize.Op;


// Create and Save a new Area
exports.create = (req, res) => {
    if (!req.body.image) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const area = {
        name: req.body.name,
        short_description: req.body.short_description, 
        description: req.body.description,
        image: req.body.image,
    };
    
    // Save Area in the database
    areas.create(area).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message: err.message || "Some error occurred while creating the Area."
        });
    });
};

// Retrieve all Areas from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

    areas.findAll({ where: condition }).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving areas."
        });
    });
};


// Retrieve all Areas from the database by name.
exports.findByName = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

    areas.findAll({ where: condition }).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving areas."
        });
    });
};

// Initialize data
exports.initdata = (req, res) => {
    const area = [
        {
            name: "Artificial Intelligence",
            short_description: "Hypercompany, thanks to its expertise in AI, Machine Learning and RPA, builds predictive models, robotizes repetitive processes and tasks to optimize business processes, obtain competitive advantages and pursue new business models, improving the customer experience.",
            description: "The incredible proliferation of Big Data, advances in the development of algorithms and the improvement of computing and storage power have given the impetus to Artificial Intelligence (AI) to be applied in concrete projects serving the business, within the various industries. The main applications of Artificial Intelligence techniques concern the use of unstructured digitized data, such as free text, voice, images or videos, just to name a few practical use cases. The focus of the projects carried out relates to three distinct but closely related areas in the corporate ecosystems:\
            COMPLIANCE: tasks such as quality assurance, fraud detection and revenue assurance act to improve understanding of business processes and outputs and ensure a high quality organization.\
            OPERATIONS: process automation, anomaly detection, predictive maintenance, image recognition, ticket analysis, log analytics, optimization & forecasting, Sales & Operational Planning, Budgeting & Closing are essential for planning corporate strategies and improving communication between departments.\
            SALES & MARKETING: Customer database analysis, Customer intelligence, Churn Analysis, Purchasing Behavior, Business KPI, Sales forecasting complete processes and enhance business strategies.",
            image: "/ai-3.jpg"
        },
        {
            name: "Cloud Computing",
            short_description: "Hypercompany provides custom solutions designed to customer requirements, creates Multi-Cloud and Hybrid Cloud environments, and builds simple, secure and fast transition strategies and roadmaps.",
            description: "Evolve, grow, progress. These are the goals of a modern, digital­oriented business. In this scenario, the cloud represents an essential dynamic for flexible, modern management of IT requirements. Nevertheless, switching to the cloud must be aligned and compliant with the organization and the company’s business characteristics.\
            Key in the creation of Hybrid Cloud solutions is Hypercompany’s great experience in the design and implementation of on-premises solutions, a guarantee for clients in the choice of the most correct cloud solution.",
            image: "/cc-3.jpeg"
        },
        {
            name: "Cybersecurity",
            short_description: "Hypercompany manages the risks deriving from Digital Transformation, ensuring that the client’s IT assets, personnel, brand and other assets are defended against the growing online threats, by following and addressing the requirements of the corresponding laws and regulations through targeted cybersecurity advisory services.",
            description: "Digital transformation is changing our day-to-day living: pervasive connectivity, clouds and data allow people and companies to do things which were unimaginable just a few years ago. On the other hand, this opens up catastrophic possibilities if the security measures put in place should fail: not by chance has the World Economic Forum ranked the risks from cyber attacks behind only those due to climate change and natural disasters, placing network security firmly in the priorities of companies and public bodies.\
            Thanks to its advanced expertise and skilled professionals, Hypercompany carries out projects in business-critical, heterogeneous and complex contexts, supporting clients as a trusted advisor in choosing the best solutions to adopt on the basis of the specific operating context.\
            Hypercompany operates across all the main markets (Finance, Telco & Media, Manufacturing, Public Sector, Energy, Aerospace & Defense, Critical Infrastructure), using state-of-the-art technologies and solutions and guaranteeing the highest level of partnership with the main cybersecurity vendors.",
            image: "/cs-3.jpg"
        }
    ];
    
    // Save Area in the database
    for (i=0;i<area.length;i++) {
        areas.create(area[i]).then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Area."
            });
        });
    }
};