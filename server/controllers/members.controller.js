const db = require("../models");
const members = db.members;
const Op = db.Sequelize.Op;


// Create and Save a new member
exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const member = {
        name: req.body.name,
        area: req.body.area,
        short_description: req.body.short_description, 
        description: req.body.description,
        designation: req.body.designation,
        image: req.body.image
    };
    
    // Save Member in the database
    members.create(member).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message: err.message || "Some error occurred while creating the member."
        });
    });
};

// Retrieve all Members from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

    members.findAll({ where: condition }).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving members."
        });
    });
};

// Retrieve all Members from the database by name.
exports.findByName = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;

    members.findAll({ where: condition }).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving members."
        });
    });
};

// Retrieve all Members from the database by area.
exports.findByArea = (req, res) => {
        const area = req.query.area;
        var condition = area ? { area: { [Op.iLike]: `%${area}%` } } : null;

    members.findAll({ where: condition }).then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving members."
        });
    });
};

//Initialize member data
exports.initdata = (req, res) => {
    const member = [
        {
            name: "Aida Gasanova",
            area: "Artificial Intelligence, Cloud Computing",
            short_description: "Aida Gasanova has been working in Hypercompany for over 12 years now.", 
            description: "Aida Gasanova has been working in Hypercompany for over 12 years now.", 
            designation: "COO",
            image: "/user-1.png"
        },
        {
            name: "Veronica Lucchetti",
            area: "Artificial Intelligence, Cloud Computing",
            short_description: "Veronica Lucchetti has been working in Hypercompany for over 8 years now", 
            description: "Veronica Lucchetti has been working in Hypercompany for over 8 years now", 
            designation: "CFO",
            image: "/user-2.png"
        },
        {
            name: "Lorenzo Grossi",
            area: "Artificial Intelligence, Cybersecurity", 
            short_description: "Lorenzo Grossi has been working in Hypercompany for over 5 years now", 
            description: "Lorenzo Grossi has been working in Hypercompany for over 5 years now", 
            designation: "CEO",
            image: "/user-3.png"
        },
        {
            name: "Sairaghav Venkataraman",
            area: "Cybersecurity, Cloud Computing",
            short_description: "Sairaghav Venkataraman has been working in Hypercompany for over 5 years now", 
            description: "Sairaghav Venkataraman has been working in Hypercompany for over 5 years now", 
            designation: "CISO",
            image: "/user-4.png"
        },
    ];
    // Save Member in the database
    for (i=0;i<member.length;i++) {
        members.create(member[i]).then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message: err.message || "Some error occurred while creating the member."
            });
        });
    }
};