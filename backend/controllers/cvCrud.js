const Cv= require("../models/Cv")
exports.addCv = (req, res, next) => {

            const cv = new Cv({
                name: req.body.newCv.name,
                address: req.body.newCv.address,
                number: req.body.newCv.number,
                email: req.body.newCv.email,
                expProf: req.body.newCv.expProf,
                formation: req.body.newCv.formation,
                compProf: req.body.newCv. compProf,
                compPers: req.body.newCv. compPers,
            });
            cv.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));

};
