const router = require("express").Router()
const UserRoutes = require("../routes/user")

router.get("/", (req, res) => {
  res.json({
    data: [
      {
        id: 1,
        title: "Kontrakan Hawa",
        address: {
          title: "Jl. Jendral Sudirman, Lingkungan Penancangan Lama",
          area: "Cipocok Jaya",
          city: "Serang",
          province: "Banten"
        },
        photo: "http://localhost:3030/assets/dummy.png",
        price: {
          type: "monthly",
          value: "Rp 600.000"
        }
      },
      {
        id: 2,
        title: "Kontrakan H. Dudi",
        address: {
          title: "Jl. Jendral Sudirman, Lingkungan Penancangan Lama",
          area: "Cipocok Jaya",
          city: "Serang",
          province: "Banten"
        },
        photo: "http://localhost:3030/assets/dummy.png",
        price: {
          type: "monthly",
          value: "Rp 550.000"
        }
      }
    ]
  })
})

router.get("/category", (req, res) => {
  res.json({
    category: [
      {
        id: 1,
        title: "Kontrakan",
        icon: "kontrakan-icon"
      },
      {
        id: 2,
        title: "Warung",
        icon: "warung-icon"
      }
    ]
  })
})

router.get("/kontrakan", (req, res) => {
  res.json({
    data: [
      {
        id: 3,
        title: "Kontrakan Sarah",
        address: {
          title: "Jl. Jendral Sudirman, Lingkungan Penancangan Lama",
          area: "Cipocok Jaya",
          city: "Serang",
          province: "Banten"
        },
        photo: "http://localhost:3030/assets/dummy.png",
        price: {
          type: "monthly",
          value: "Rp 600.000"
        }
      },
      {
        id: 4,
        title: "Kontrakan Ratu Reisya",
        address: {
          title: "Jl. Jendral Sudirman, Lingkungan Penancangan Lama",
          area: "Cipocok Jaya",
          city: "Serang",
          province: "Banten"
        },
        photo: "http://localhost:3030/assets/dummy.png",
        price: {
          type: "monthly",
          value: "Rp 550.000"
        }
      },
      {
        id: 5,
        title: "Kontrakan OLIS",
        address: {
          title: "Jl. Jendral Sudirman, Lingkungan Penancangan Lama",
          area: "Cipocok Jaya",
          city: "Serang",
          province: "Banten"
        },
        photo: "http://localhost:3030/assets/dummy.png",
        price: {
          type: "monthly",
          value: "Rp 550.000"
        }
      },
      {
        id: 6,
        title: "Kontrakan Hj. Bakrah",
        address: {
          title: "Jl. Lingkar Kemang, Belakang Mall of Serang",
          area: "Cipocok Jaya",
          city: "Serang",
          province: "Banten"
        },
        photo: "http://localhost:3030/assets/dummy.png",
        price: {
          type: "monthly",
          value: "Rp 500.000"
        }
      }
    ]
  })
})

router.use("/user", UserRoutes)

module.exports = router