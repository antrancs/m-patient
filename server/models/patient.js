const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    fbId: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        minlength: 1,
        trim: true
    },
    disease: {
        type: String
    },
    location: {
        type: String
    },
    personalityScore: {
        type: Number
    },
    chatWith: {
        type: String
    }
});

PatientSchema.statics.findByFbId = function(fbId) {
    return this.findOne({fbId})
                .then((patient) => {
                    return !!patient;
                });
};

PatientSchema.statics.findMatchingPatients = function(fbId) {
    return this.findById(fbId)
                .then((patient) => {
                    if (!patient) {
                        return Promise.reject();
                    }

                    return this.find({
                        disease: patient.disease
                    });
                });
}

const Patient = mongoose.model('Patient', PatientSchema);

module.exports = { Patient };