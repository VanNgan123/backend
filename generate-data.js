import { faker } from "@faker-js/faker";
import fs from "fs";

faker.location = { country: "Vietnam" };

// console.log(faker.string.uuid());
// console.log(faker.commerce.productName());
// console.log(faker.commerce.price());
// console.log(faker.commerce.department());
// console.log(faker.person.fullName());
const randomColors = [
  "Red",
  "Green",
  "Blue",
  "Yellow",
  "Black",
  "White",
  "Purple",
  "Orange",
  "Pink",
  "Gray",
];

const randomCategory = (n) => {
  if (n <= 0) return [];

  const categoryList = [];

  for (let index = 0; index < n; index++) {
    const category = {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    categoryList.push(category);
  }
  return categoryList;
};
const randomProductList = (categories) => {
  if (categories.length === 0) return [];
  const productList = [];
  categories.forEach((category) => {
    for (let index = 0; index < 7; index++) {
      const product = {
        categoryId: category.id,
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        color: randomColors[faker.number.int({ min: 0, max: randomColors.length - 1 })],
        price: parseFloat(faker.commerce.price({ min: 0, max: 900 })),
        description: faker.lorem.paragraph(),
        image: faker.image.urlPicsumPhotos(400, 400),
        quantity: faker.number.int({ min: 1, max: 100 }),
        sold: faker.number.int({ min: 1, max: 100 }),
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };
      productList.push(product);
    }
  });
  return productList;
};

//tạo hàm random user
const randomUserList = (n) => {
  if (n <= 0) return [];
  const userList = [];
  for (let index = 0; index < n; index++) {
    const user = {
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      fullname: faker.person.fullName(),
      email: faker.internet.email(),
      role: index < 3 ? "admin" : "customer",
      password: faker.internet.password(), // Trong thực tế nên mã hóa password
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    userList.push(user);
  }
  return userList;
};

const main = () => {
  const newImages = [
    "https://static.wixstatic.com/media/c22c23_d4488c12f2bc40dfbd1bbd82956eb97a~mv2.png/v1/fill/w_559,h_745,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/c22c23_d4488c12f2bc40dfbd1bbd82956eb97a~mv2.png",
    "https://static.wixstatic.com/media/c22c23_5ccf45bbbdf842e7955635610510f7c3~mv2.jpg/v1/fill/w_559,h_745,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_5ccf45bbbdf842e7955635610510f7c3~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_7b3b59adc71d48aea694647bfb4385b8~mv2.jpg/v1/fill/w_559,h_745,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_7b3b59adc71d48aea694647bfb4385b8~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_4567980aa0eb4bfba21b3706eaa8b2ca~mv2.jpg/v1/fill/w_559,h_745,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_4567980aa0eb4bfba21b3706eaa8b2ca~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_1bef44e4aad644d88da3458c1aa9c341~mv2.jpg/v1/fill/w_424,h_565,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_1bef44e4aad644d88da3458c1aa9c341~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_527e6c6f3d944fb88c80907c2f754afb~mv2.jpg/v1/fill/w_424,h_565,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_527e6c6f3d944fb88c80907c2f754afb~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_68efa76790cf48a7acdb518977ce72a1~mv2.png/v1/fill/w_424,h_565,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_68efa76790cf48a7acdb518977ce72a1~mv2.png ",
    "https://static.wixstatic.com/media/c22c23_7b3b59adc71d48aea694647bfb4385b8~mv2.jpg/v1/fill/w_424,h_565,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_7b3b59adc71d48aea694647bfb4385b8~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_a79ca5eba4af45bc99bf27f0d9eb637d~mv2.jpg/v1/fill/w_374,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_a79ca5eba4af45bc99bf27f0d9eb637d~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_35b786fdd0bb443e9ac09561af1569d3~mv2.jpg/v1/fill/w_374,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_35b786fdd0bb443e9ac09561af1569d3~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_991175ea1f9140648365694757467456~mv2.jpg/v1/fill/w_374,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_991175ea1f9140648365694757467456~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_d898eb06de73454788ddf633d055e85b~mv2.jpg/v1/fill/w_374,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_d898eb06de73454788ddf633d055e85b~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_75059a72af5e4949aecdfbda8746f4ef~mv2.jpg/v1/fill/w_374,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_75059a72af5e4949aecdfbda8746f4ef~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_ee8bc28108d44d34b0ed1b312845667f~mv2.jpg/v1/fill/w_374,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_ee8bc28108d44d34b0ed1b312845667f~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_396e7b1e80764edca161180595507710~mv2.jpg/v1/fill/w_374,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_396e7b1e80764edca161180595507710~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_4567980aa0eb4bfba21b3706eaa8b2ca~mv2.jpg/v1/fill/w_374,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_4567980aa0eb4bfba21b3706eaa8b2ca~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_f37a0a50f81146d7bbaf5edb5803cd9f~mv2.jpg/v1/fill/w_374,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_f37a0a50f81146d7bbaf5edb5803cd9f~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_229835b7ed254c8c95f2b90ef1404ded~mv2.jpg/v1/fill/w_374,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_229835b7ed254c8c95f2b90ef1404ded~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_5ccf45bbbdf842e7955635610510f7c3~mv2.jpg/v1/fill/w_374,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_5ccf45bbbdf842e7955635610510f7c3~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_527e6c6f3d944fb88c80907c2f754afb~mv2.jpg/v1/fill/w_374,h_498,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_527e6c6f3d944fb88c80907c2f754afb~mv2.jpg",
    //computer=2
    "https://shopdunk.com/images/thumbs/0022544_macbook-pro-14-inch-m3-2023-16gb-ram-512gb-ssd_550.jpeg",
    "https://shopdunk.com/images/thumbs/0008683_macbook-pro-13-inch-m2-chip-with-8-core-cpu-and-10-core-gpu-8gb-ram-256gb-ssd_550.webp",
    "https://static.wixstatic.com/media/c22c23_01a8a61a9f6c4e3a97711b8c684050e9~mv2.png/v1/fill/w_349,h_465,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_01a8a61a9f6c4e3a97711b8c684050e9~mv2.png",
    "https://static.wixstatic.com/media/c22c23_88af147a4da742eb86528c8d8e5594fd~mv2.jpg/v1/fill/w_349,h_465,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_88af147a4da742eb86528c8d8e5594fd~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_3ab3d3acd73843deba1dece7b2254e2f~mv2.jpg/v1/fill/w_349,h_465,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_3ab3d3acd73843deba1dece7b2254e2f~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_6137a9aabb314e18bd7cbbbcb37ef185~mv2.jpg/v1/fill/w_349,h_465,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_6137a9aabb314e18bd7cbbbcb37ef185~mv2.jpg",
    "https://shopdunk.com/images/thumbs/0022757_silver_550.jpeg",
    "https://shopdunk.com/images/thumbs/0011555_macbook-pro-16-inch-m2-max-38-core-64gb-1tb-cto_550.jpeg",
    //drone and camera=3
    "https://static.wixstatic.com/media/c22c23_1bef44e4aad644d88da3458c1aa9c341~mv2.jpg/v1/fill/w_288,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_1bef44e4aad644d88da3458c1aa9c341~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_607618f163cf465da48e3393dbcd871e~mv2.jpg/v1/fill/w_288,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_607618f163cf465da48e3393dbcd871e~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_c25f748ee2264db6a3767d99717a2b84~mv2.jpg/v1/fill/w_396,h_528,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_c25f748ee2264db6a3767d99717a2b84~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg/v1/fill/w_396,h_528,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_3fd6a46235b34d158ce2ad1628900bb2~mv2.jpg/v1/fill/w_396,h_528,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_3fd6a46235b34d158ce2ad1628900bb2~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_2d5a87c251274b8083356fd1e61cf68d~mv2.jpg/v1/fill/w_396,h_528,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_2d5a87c251274b8083356fd1e61cf68d~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_717f42d8a3d648eab5245dd2025d29ac~mv2.jpg/v1/fill/w_396,h_528,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_717f42d8a3d648eab5245dd2025d29ac~mv2.jpg",
    "https://static.wixstatic.com/media/c22c23_1fc89607a43a4df9b54dd3a1f9603f25~mv2.jpg/v1/fill/w_396,h_528,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_1fc89607a43a4df9b54dd3a1f9603f25~mv2.jpg",
    //1,4,6,2,3
    //mobile and wearables tech=5
    "https://shopdunk.com/images/thumbs/0022457_midnight_550.jpeg",//
    "https://shopdunk.com/images/thumbs/0024997_xanh_550.jpeg",//
    "https://shopdunk.com/images/thumbs/0022172_apple-watch-ultra-2-gps-cellular-49mm-alpine-loop_240.png",//
    "https://shopdunk.com/images/thumbs/0022171_apple-watch-series-9-nhom-gps-cellular-41mm-sport-band_240.png",//
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHvjislE-IvdL8kBPipuUM6HwZb04S3C-X4ANyCHopNjei4GcFnFE7XzlGgi2RQYkaykY&usqp=CAU",//
    "https://www.techtimes.vn/wp-content/uploads/2024/09/image-81.jpeg",//
    "https://static.wixstatic.com/media/c22c23_991175ea1f9140648365694757467456~mv2.jpg/v1/fill/w_349,h_465,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_991175ea1f9140648365694757467456~mv2.jpg",//
    "https://static.wixstatic.com/media/c22c23_ee8bc28108d44d34b0ed1b312845667f~mv2.jpg/v1/fill/w_349,h_465,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_ee8bc28108d44d34b0ed1b312845667f~mv2.jpg" ,//
    "https://static.wixstatic.com/media/c22c23_75059a72af5e4949aecdfbda8746f4ef~mv2.jpg/v1/fill/w_349,h_465,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_75059a72af5e4949aecdfbda8746f4ef~mv2.jpg",//
    "https://static.wixstatic.com/media/c22c23_396e7b1e80764edca161180595507710~mv2.jpg/v1/fill/w_349,h_465,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_396e7b1e80764edca161180595507710~mv2.jpg",//
    "https://static.wixstatic.com/media/c22c23_7c88223cd6d647ca80670b82509dbf15~mv2.jpg/v1/fill/w_349,h_465,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_7c88223cd6d647ca80670b82509dbf15~mv2.jpg",//
    "https://static.wixstatic.com/media/c22c23_299fed1f1efd4b4fa580ac49d00628dd~mv2.jpg/v1/fill/w_349,h_465,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_299fed1f1efd4b4fa580ac49d00628dd~mv2.jpg",//
    "https://static.wixstatic.com/media/c22c23_ee8bc28108d44d34b0ed1b312845667f~mv2.jpg/v1/fill/w_349,h_465,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_ee8bc28108d44d34b0ed1b312845667f~mv2.jpg",//
    "https://shopdunk.com/images/thumbs/0029947_den_550.jpeg",//
    "https://shopdunk.com/images/thumbs/0022152_starlight_550.jpeg",//
    "https://static.wixstatic.com/media/c22c23_7fcc8eee4f374e80abdf363d0142d2ea~mv2.jpg/v1/fill/w_349,h_465,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_7fcc8eee4f374e80abdf363d0142d2ea~mv2.jpg",//
  ];

  // tạo data mẩu
  const categories = randomCategory(8);
 
  let productList = randomProductList(categories);
  const userList = randomUserList(3);
  // toaj Object chứa
  // {username: "admin" ,fullname: "admin", password: "123456",email: "admin@admin"}
  userList[0].username = "admin";
  userList[0].password = "123456";
  userList[0].email = "admin@admin.com";
  userList[0].fullname = "ADMIN";
  userList[1].username = "adminmanager";
  userList[1].password = "123456";
  userList[1].email = "adminmanager@admin";
  // productList = productList.map((product, index) => {
  //   // Kiểm tra nếu có hình ảnh mới
  //   if (newImages[index]) {
  //     return {
  //       ...product,
  //       if(index<4){
  //         categoryId: 6
  //       }else{
  //         categoryId: 1
  //       }

  //       image: newImages[index], // Cập nhật hình ảnh mới
  //     };
  //   }
  //   return product;
  // });

  productList = productList.map((product, index) => {
    if (index < 4) {
      return {
        ...product,
        categoryId: 6, // Cập nhật categoryId
        image: newImages[index], // Cập nhật hình ảnh mới
      };
    } else if (index >= 4 && index < 8) {
      return {
        ...product,
        categoryId: 1, // Cập nhật categoryId
        image: newImages[index], // Cập nhật hình ảnh mới
      };
    } else if (index >= 8 && index < 20) {
      return {
        ...product,
        categoryId: 4, // Cập nhật categoryId
        image: newImages[index], // Cập nhật hình ảnh mới
      };
    } else if (index >= 20 && index < 27) {
      return {
        ...product,
        categoryId: 2, // Cập nhật categoryId
        image: newImages[index], // Cập nhật hình ảnh mới
      };
    }else if (index >= 27 && index < 34) {
      return {
        ...product,
        categoryId: 3, // Cập nhật categoryId
        image: newImages[index], // Cập nhật hình ảnh không
      };
    }else if (index >= 34 && index < 52) {
      return {
        ...product,
        categoryId: 5, // Cập nhật categoryId
        image: newImages[index], // Cập nhật hình ảnh không
      }
    }  
    else{
      return {
        ...product,
      };
    }
  });

  const updateObjectsInArray = (arr) => {
    return arr.map((obj, index) => {
      // Cập nhật đối tượng ở mỗi vòng lặp
      return {
        ...obj, // Sao chép tất cả các thuộc tính cũ
        updatedProperty: `Updated ${index}`, // Thêm thuộc tính hoặc cập nhật thuộc tính
        updatedAt: Date.now(),
      };
    });
  };

  const newCategoryNames = [
    "Top Sellers",
    "Computers",
    "Droners & Cameras",
    "Headphones & Speakers",
    "Mobile and Wearables Tech",
    "New Products",
    "Tablets",
    "TV & Home Cinema",
  ];
  const categorie = categories.map((category, index) => ({
    id: index+1,
    name: newCategoryNames[index] , // Cập nhật tên mới hoặc giữ tên cũ
    updatedAt: Date.now(), // Thêm thời gian cập nhật
  }));















  const db = {
    categories: categorie,
    products: productList,
    users: userList,
    carts: [],
    orders: [],
    reviews: [],
  };
  fs.writeFile("db.json", JSON.stringify(db), () => {
    console.log("🚀 ~ fs.writeFile ~ Đã lưu file vào thành công:");
  });
};
main();
