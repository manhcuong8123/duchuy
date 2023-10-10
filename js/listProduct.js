const listSnCongNghiep = [
  {
    id: 1,
    imgSrc: "images/san1.png",
    headerText: "SÀN EPOXY NHÀ MÁY CP PHƯỚC HẢI – VŨNG TÀU",
  },
  {
    id: 2,
    imgSrc: "images/san2.png",
    headerText: "SÀN PU POLYCEM NHÀ XƯỞNG LÊN MEN FERMENTER",
  },
  {
    id: 3,
    imgSrc: "images/san3.png",
    headerText: "SÀN PU POLYCEM NHÀ MÁY MASAN F5 – BÌNH DƯƠNG",
  },
  {
    id: 4,
    imgSrc: "images/san4.png",
    headerText: "SÀN PU – POLYCEM NHÀ MÁY PURATOS",
  },
  {
    id: 5,
    imgSrc: "images/san44.png",
    headerText: "CHỐNG THẤM PU NHÀ MÁY GIA MINH",
  },
  {
    id: 6,
    imgSrc: "images/san5.png",
    headerText: "CHỐNG THẤM PU NHÀ MÁY GIA MINH",
  },
  {
    id: 7,
    imgSrc: "images/san55.png",
    headerText: "CHỐNG THẤM PU NHÀ MÁY GIA MINH",
  },
  {
    id: 8,
    imgSrc: "images/san6.png",
    headerText: "SÀN PU POLYCEM NHÀ MÁY THUỶ SẢN SAO TA",
  },
  {
    id: 9,
    imgSrc: "images/san7.png",
    headerText: "SÀN PU CHO KHO LẠNH NHÀ MÁY CP",
  },
  {
    id: 10,
    imgSrc: "images/san8.png",
    headerText: "SÀN EPOXY CHO NHÀ KHO NHÀ MÁY UNILIVER",
  },
  {
    id: 11,
    imgSrc: "images/san9.png",
    headerText: "SÀN BÊ TÔNG ĐÁNH BÓNG",
  },
  {
    id: 12,
    imgSrc: "images/san10.png",
    headerText: "PHỦ FRP CHO BỒN CHỨA",
  },
];
const listXayDung = [
  {
    id: 13,
    imgSrc: "images/bietthu1.jpg",
    headerText: "Mẫu Biệt Thự",
  },
  {
    id: 14,
    imgSrc: "images/bietthu2.jfif",
    headerText: "Mẫu Biệt Thự",
  },
  {
    id: 15,
    imgSrc: "images/bitethu3.jfif",
    headerText: "Mẫu Biệt Thự",
  },
  {
    id: 16,
    imgSrc: "images/bitethu4.jfif",
    headerText: "Mẫu Biệt Thự",
  },
];

const listhoachat = [
  {
    id: 20,
    imgSrc: "images/hoa1.png",
    headerText: "Hoá Chất Ngành Xây Dựng",
  },
  {
    id: 21,
    imgSrc: "images/hoa22.png",
    headerText: "Hoá Chất Ngành Thuỷ Sản",
  },
  {
    id: 22,
    imgSrc: "images/hoa3.png",
    headerText: "Hoá Chất Ngành Sản Xuất",
  },
  {
    id: 23,
    imgSrc: "images/hoa4.png",
    headerText: "Hoá Chất Ngành Thực Phẩm",
  },
  {
    id: 24,
    imgSrc: "images/hoa5.png",
    headerText: "Hoá Chất Ngành Xây Dựng",
  },
  {
    id: 25,
    imgSrc: "images/hoa6.png",
    headerText: "Hoá Chất Ngành Thuỷ Sản",
  },
  {
    id: 26,
    imgSrc: "images/hoa7.png",
    headerText: "Hoá Chất Ngành Sản Xuất",
  },
  {
    id: 27,
    imgSrc: "images/hoa8.png",
    headerText: "Hoá Chất Ngành Thực Phẩm",
  },
];

// Hiển thị mảng sản phẩm bổ sung trong console
console.log(listXayDung);

const listxdcn = [
  {
    id: 17,
    imgSrc: "images/xuong.png",
    headerText: "Xây dựng xưởng",
  },
  {
    id: 18,
    imgSrc: "images/dientran.png",
    headerText: "Hệ thống điện âm trần",
  },
  {
    id: 19,
    imgSrc: "images/dhoa.png",
    headerText: "Điều hoà không khí",
  },
  {
    id: 20,
    imgSrc: "images/pccc.png",
    headerText: "Hệ thống PCCC",
  },
];

function showProduct1(data) {
  const popularList = document.querySelector(".listProduct-san");
  if (popularList) {
    popularList.innerHTML = "";
    for (let item of data) {
      // console.log(item);
      popularList.innerHTML += `

      <div class="col-lg-3 col-md-4 col-sm-6 col-12 product" data-aos="zoom-in">
      <div class="item-product">
          <img src="${item.imgSrc}" width="100%" alt="">
          <div class="text-item-products">
              <div class="header-text-product">
                  <p>${item.headerText}
                  </p>
                  <span><i class="fa-solid fa-plus"></i></span>
              </div>
              <a href="detailProduct.html?id=${item.id}"><button>Xem Thêm</button></a>
          </div>
      </div>
  </div>

          
        `;
    }
  }
}
showProduct1(listSnCongNghiep);

function showProduct2(data) {
  const popularList = document.querySelector(".bietthu");
  if (popularList) {
    popularList.innerHTML = "";
    for (let item of data) {
      // console.log(item);
      popularList.innerHTML += `
  
        <div class="col-lg-3 col-md-4 col-sm-6 col-12 product" data-aos="zoom-in">
        <div class="item-product">
            <img src="${item.imgSrc}" width="100%" alt="">
            <div class="text-item-products">
                <div class="header-text-product">
                    <p>${item.headerText}
                    </p>
                    <span><i class="fa-solid fa-plus"></i></span>
                </div>
                <a href="detailProduct.html?id=${item.id}"><button>Xem Thêm</button></a>
            </div>
        </div>
    </div>
  
            
          `;
    }
  }
}
showProduct2(listXayDung);

function showProduct3(data) {
  const popularList = document.querySelector(".xaydungcn");
  if (popularList) {
    popularList.innerHTML = "";
    for (let item of data) {
      // console.log(item);
      popularList.innerHTML += `

      <div class="col-lg-3 col-md-4 col-sm-6 col-12 product" data-aos="zoom-in">
      <div class="item-product">
          <img src="${item.imgSrc}" width="100%" alt="">
          <div class="text-item-products">
              <div class="header-text-product">
                  <p>${item.headerText}
                  </p>
                  <span><i class="fa-solid fa-plus"></i></span>
              </div>
              <a href="detailProduct.html?id=${item.id}"><button>Xem Thêm</button></a>
          </div>
      </div>
  </div>

          
        `;
    }
  }
}
showProduct3(listxdcn);


function showProduct4(data) {
  const popularList = document.querySelector(".hoachat");
  if (popularList) {
    popularList.innerHTML = "";
    for (let item of data) {
      // console.log(item);
      popularList.innerHTML += `

      <div class="col-lg-3 col-md-4 col-sm-6 col-12 product" data-aos="zoom-in">
      <div class="item-product">
          <img src="${item.imgSrc}" width="100%" alt="">
          <div class="text-item-products">
              <div class="header-text-product">
                  <p>${item.headerText}
                  </p>
                  <span><i class="fa-solid fa-plus"></i></span>
              </div>
              <a href="detailProduct.html?id=${item.id}"><button>Xem Thêm</button></a>
          </div>
      </div>
  </div>

          
        `;
    }
  }
}
showProduct4(listhoachat);
function detailProduct() {
  const prdId = new URLSearchParams(window.location.search).get("id");
  console.log(prdId);

  if (prdId) {
    let product;
    let detailProductDiv = document.querySelector(".left-detail");

    product = listSnCongNghiep.find(function (item) {
      return item.id == prdId;
    });

    if (product) {
      console.log(product);
      detailProductDiv.innerHTML = `
        <h3>${product.headerText}</h3>
        <img src="${product.imgSrc}" width="100%" alt="">
        <p>Thông tin dự án:</p>
        <div class="">
          <table>
            <tr class="le">
              <th>Tên dự án:</th>
              <td>${product.headerText}</td>
            </tr>
            <tr>
              <th>Chủ Đầu tư:</th>
              <td>VinGroup</td>
            </tr>
            <tr class="le">
              <th>Thời Gian Hoàn Thành:</th>
              <td>tháng 3-2020</td>
            </tr>
            <tr>
              <th>Địa Điểm:</th>
              <td>TP. HCM</td>
            </tr>
          </table>
        </div>
      `;
    } else {
      product = listXayDung.find(function (item) {
        return item.id == prdId;
      });

      if (product) {
        console.log(product);
        detailProductDiv.innerHTML = `
          <h3>${product.headerText}</h3>
          <img src="${product.imgSrc}" width="100%" alt="">
          <p>Thông tin dự án:</p>
          <div class="">
            <table>
              <tr class="le">
                <th>Tên dự án:</th>
                <td>${product.headerText}</td>
              </tr>
              <tr>
                <th>Chủ Đầu tư:</th>
                <td>VinGroup</td>
              </tr>
              <tr class="le">
                <th>Thời Gian Hoàn Thành:</th>
                <td>tháng 3-2020</td>
              </tr>
              <tr>
                <th>Địa Điểm:</th>
                <td>TP. HCM</td>
              </tr>
            </table>
          </div>
        `;
      }
      else {
        product = listxdcn.find(function (item) {
          return item.id == prdId;
        });

        if (product) {
          console.log(product);
          detailProductDiv.innerHTML = `
            <h3>${product.headerText}</h3>
            <img src="${product.imgSrc}" width="100%" alt="">
            <p>Thông tin dự án:</p>
            <div class="">
              <table>
                <tr class="le">
                  <th>Tên dự án:</th>
                  <td>${product.headerText}</td>
                </tr>
                <tr>
                  <th>Chủ Đầu tư:</th>
                  <td>VinGroup</td>
                </tr>
                <tr class="le">
                  <th>Thời Gian Hoàn Thành:</th>
                  <td>tháng 3-2020</td>
                </tr>
                <tr>
                  <th>Địa Điểm:</th>
                  <td>TP. HCM</td>
                </tr>
              </table>
            </div>
          `;
        } 
        else {
          product = listhoachat.find(function (item) {
            return item.id == prdId;
          });
        }
        if (product) {
          console.log(product);
          detailProductDiv.innerHTML = `
            <h3>${product.headerText}</h3>
            <img src="${product.imgSrc}" width="100%" alt="">
            <p>Thông tin dự án:</p>
            <div class="">
              <table>
                <tr class="le">
                  <th>Tên dự án:</th>
                  <td>${product.headerText}</td>
                </tr>
                <tr>
                  <th>Chủ Đầu tư:</th>
                  <td>VinGroup</td>
                </tr>
                <tr class="le">
                  <th>Thời Gian Hoàn Thành:</th>
                  <td>tháng 3-2020</td>
                </tr>
                <tr>
                  <th>Địa Điểm:</th>
                  <td>TP. HCM</td>
                </tr>
              </table>
            </div>
          `;
        }
        else {
          console.log("Không tìm thấy sản phẩm");
        }
      }
    }
  }
}

detailProduct();
