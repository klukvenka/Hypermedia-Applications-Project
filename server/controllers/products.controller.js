const db = require("../models");
const products = db.products;
const Op = db.Sequelize.Op;

// Create and Save a new product
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const product = {
        name: req.body.name,
        area: req.body.area,
        manager: req.body.manager,
        reference: req.body.reference,
        short_description: req.body.short_description, 
        description: req.body.description,
        image: req.body.image
    };
    
    // Save product in the database
    products.create(product).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message: err.message || "Some error occurred while creating the product."
        });
    });
};

// Retrieve all products from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

    products.findAll({ where: condition }).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving products."
        });
    });
};

// Retrieve all products from the database by name.
exports.findByName = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

    products.findAll({ where: condition }).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving products."
        });
    });
};

// Retrieve all products from the database by area.
exports.findByArea = (req, res) => {
    const area = req.query.area;
    var condition = area ? { area: { [Op.iLike]: `%${area}%` } } : null;

    products.findAll({ where: condition }).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving products."
        });
    });
};

// Retrieve all products from the database by manager.
exports.findByManager = (req, res) => {
    const manager = req.query.manager;
    var condition = manager ? { manager: { [Op.iLike]: `%${manager}%` } } : null;

    products.findAll({ where: condition }).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving products."
        });
    });
};

// Retrieve all products from the database by reference.
exports.findByReference = (req, res) => {
    const reference = req.query.reference;
    var condition = reference ? { reference: { [Op.iLike]: `%${reference}%` } } : null;

    products.findAll({ where: condition }).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving products."
        });
    });
};

// Initialize a new product
exports.initdata = (req, res) => {
    const product = [
        {
            name: "HyperPA",
            area: "Artificial Intelligence",
            manager: "Veronica Lucchetti",
            reference: "Lorenzo Grossi",
            short_description: "Hypercompany's approach in the construction of its offer in the automation field follows Adoption of the UiPath platform, a market-leading enterprise solution in the RPA field, Design and implementation of custom solutions based on Selenium, the most popular application framework for web browser automation, Integration of skills and solutions in the Cognitive / AI field to build a proposal of Intelligent services Automation.", 
            description: "Robot Process Automation (RPA) aims to automate the execution of operational and administrative processes (mainly back office), emulating the activity of a human resource and interacting with other applications, to avoid repetitive and time consuming activities.\
            In order to simplify critical processes with the RPA, the presence of digitized data is necessary for structured and repeatedly executed tasks, based on rules and well documented processes, with limited exception handling.\
            RPA is in effect a technology that is actively contributing to the evolution of digital transformation for companies in all sectors and all functions.",
            image: "/ai-1.jpg"
        },
        {
            name: "BankAI",
            area: "Artificial Intelligence",
            manager: "Aida Gasanova",
            reference: "Veronica Lucchetti",
            short_description: "Application of Artificial Intelligence (AI) solutions in the banking sector has transformed the customer experience, allowing for 24/7 customer interaction. This is the context in which Hypercompany won the tender for the three-year digital transformation program for one of the biggest European banking groups, based on the use of Artificial Intelligence technologies.", 
            description: "Today, AI is, in particular, taking on the need to automate activities and workflows in the back office of financial institutions: many processes require routine, repetitive tasks, and often have many people processing a single client request. This high level of manual processing is slow and costly, and can lead to inconsistent results and high error rates. Artificial intelligence (AI) offers solutions which can free these back-office procedures from unnecessary costs and errors.\
            The goal of this project is to optimize and automate as much as possible, thanks to the introduction of cognitive capacities, both the integration of certain company IT systems and the client's back-end processes, making the work of certain teams more efficient in carrying out repetitive and time-consuming activities, consequently improving customer satisfaction of the consumer and business targets.\
            The requirement was to generate a significant quantity of data in a limited timeframe and to implement a scalable architecture in order to develop cognitive functionalities and incremental use cases over time, without giving up on high levels of precision.\
            This project involved the design and implementation of “cognitive robot” software solutions, based on Artificial Intelligence technologies, and the corresponding application maintenance activities. ",
            image: "/ai-2.jpg"
        },
        {
            name: "HyperProtect",
            area: "Cybersecurity",
            manager: "Sairaghav Venkataraman",
            reference: "Lorenzo Grossi",
            short_description: "This service from Hypercompany ensures the privacy, confidentiality, control and protection of your company's data.",
            description: "Prevent information leakage by using the best tools:\
            -Access control \
            -Traceability over documents \
            -Information protection based on used behaviour \
            -Different tools \
            -Avoidance of unnoticed information disclosure \
            -Documentation tracking \
            Secure Collaboration (IRM)",
            image: "/cs-1.jpg"
        },
        {
            name: "HyperVM",
            area: "Cybersecurity",
            manager: "Lorenzo Grossi",
            reference: "Sairaghav Venkataraman",
            short_description: "Our Cyber Threat Intelligence solutions aim at helping you understand your digital risks, providing you with a strategic advantage and situational awareness for better identification and anticipation against threats targeting your digital assets.",
            description: "Digital Risk Protection Monitor and protect your company´s brand and reputation against targeted threats against your organisation. \
            -Proprietary platform and best-in-class partners \
            -Specialized highly skilled Cyber Threat Intelligence experts \
            -Curated actionable alerts, relevant to your business \
            -Global threat visibility and local presence \
            -Reduce financial and reputational losses \
            -Support CISO visibility and decision-making",
            image: "/cs-2.jpg"
        },
        {
            name: "ConfidentialComputing",
            area: "Cloud Computing",
            manager: "Sairaghav Venkataraman",
            reference: "Aida Gasanova",
            short_description: "Data encryption in use with Confidential VM and Confidential GKE Node.",
            description: "Confidential VMs are part of an innovative technology that allows customers to encrypt their data more sensitive in the cloud during processing. The Hypercompany approach allows customers to encrypt their data without making changes to application code or having to compromise on performance.\
            Confidential Computing opens up scenarios that would not have been possible before. \
            Organizations will be able to collaborate, always maintaining the confidentiality of data.\
            Our goal is to make Confidential Computing simple. The transition to Confidential VM is seamless - all workloads running today, new and existing, can run as Confidential VM. To use Confidential VM, you do not need to make any changes to the application code. Just select a checkbox.",
            image: "/cc-1.jpg"
        },
        {
            name: "HyperCloudRun",
            area: "Cloud Computing",
            manager: "Aida Gasanova",
            reference: "Veronica Lucchetti",
            short_description: "Develop and deploy highly scalable containerized applications on a fully managed serverless platform.",
            description: "Write code your way using your favorite language (Go, Python, Java, Ruby, Node.js and others)\
            Delegate the entire infrastructure management process to simplify the developer experience\
            Built on the basis of an open source standard, Knative, allows maximum portability of your applications\
            New customers receive $ 300 in credits at no additional cost to spend on Cloud Run in the first 90 days. All Cloud Run customers get 2 million requests per month at no additional cost.",
            image: "/cc-2.jpeg"
        },

    ];
    
    // Save product in the database
    for (i=0;i<product.length;i++) {
        products.create(product[i]).then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message: err.message || "Some error occurred while creating the product."
            });
        });
    }
};

