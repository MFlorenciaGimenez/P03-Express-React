"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelReservation = exports.createReservation = exports.getReservationById = exports.getAllReservations = void 0;
const getAllReservations = (req, res) => {
    try {
        res.status(200).json({
            message: "xlfnzkfn"
        });
    }
    catch (error) {
        res.status(500).json({
            message: "skdfnjaskf"
        });
    }
};
exports.getAllReservations = getAllReservations;
const getReservationById = (req, res) => {
    try {
        res.status(200).json({
            message: "all reservations"
        });
    }
    catch (error) {
        res.status(500).json({
            message: "eksgnjkas"
        });
    }
};
exports.getReservationById = getReservationById;
const createReservation = (req, res) => {
    try {
        res.status(200).json({
            message: "hola"
        });
    }
    catch (error) {
        res.status(500).json({
            message: "dkjsnkjasf"
        });
    }
};
exports.createReservation = createReservation;
const cancelReservation = (req, res) => {
    try {
        res.status(200).json({
            message: "jbajbflkaf"
        });
    }
    catch (error) {
        res.status(500).json({
            message: "dsjnjsgn"
        });
    }
};
exports.cancelReservation = cancelReservation;
