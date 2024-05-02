const { where } = require("sequelize");
const db = require("../models");
const Presensi = db.presensis;

exports.index = (req, res) => {
  Presensi.findAll()
    .then((data) => {
      res.json({
        message: "Data presensi ditemukan",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Data presensi tidak ditemukan",
      });
    });
};

exports.show = (req, res) => {
  const id = req.params.id; // Mengambil id dari permintaan HTTP

  Presensi.findByPk(id)
    .then((data) => {
      res.json({
        message: "Data presensi ditemukan",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Data presensi tidak ditemukan",
      });
    });
};

exports.create = (req, res) => {
  const presensi = {
    nama: req.body.nama,
    status: req.body.status,
  };

  Presensi.create(presensi)
    .then((data) => {
      res.json({
        message: "Data presensi berhasil ditambahkan",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Gagal ditambahkan",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id; // Mengambil id dari permintaan HTTP

  Presensi.update(req.body, {
    where: { id: id }, // Menentukan kondisi untuk memperbarui data dengan id yang sesuai
  })
    .then((data) => {
      res.json({
        message: "Data presensi berhasil diupdate",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Gagal diupdate",
      });
    });
};

exports.destroy = (req, res) => {
  const id = req.params.id; // Mengambil id dari permintaan HTTP

  Presensi.destroy({
    where: { id: id }, // Menentukan kondisi untuk menghapus data dengan id yang sesuai
  })
    .then((data) => {
      res.json({
        message: "Data presensi berhasil dihapus",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Gagal dihapus",
      });
    });
};
