// import React from "react";
import bean from "@/assets/DashboardIMG/beansprouts.png";
import how from "@/assets/DashboardIMG/howto1.png";
import bot from "@/assets/DashboardIMG/detail.png";
// import line from "@/assets/DashboardIMG/line.png";
type Props = {};

export default function Dashboard({ }: Props) {
  return (
    <div className="content">
      <div className="dash-box d-flex">
        <div className="box-1 col-md-3 row">
          <div className="img-box col-md-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/8782/8782864.png"
              alt=""
              width={80}
            />
          </div>
          <div className="col-md-6">
            <p className="namebox">คำสั่งซื้อ</p>
            <p className="amount">00</p>
          </div>
        </div>
        <div className="box-1 col-md-3 row">
          <div className="img-box col-md-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2821/2821876.png"
              alt=""
              width={80}
            />
          </div>
          <div className="col-md-6">
            <p className="namebox">เตรียมสินค้า</p>
            <p className="amount">00</p>
          </div>
        </div>
        <div className="box-1 col-md-3 row">
          <div className="img-box col-md-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4088/4088793.png"
              alt=""
              width={80}
            />
          </div>
          <div className="col-md-6">
            <p className="namebox">กำลังจัดส่ง</p>
            <p className="amount">00</p>
          </div>
        </div>
        <div className="box-1 col-md-3 row">
          <div className="img-box col-md-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6260/6260152.png"
              alt=""
              width={80}
            />
          </div>
          <div className="col-md-6">
            <p className="namebox">ยกเลิก</p>
            <p className="amount">00</p>
          </div>
        </div>
      </div>

      <div className="shop-detail mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <img src={bean} alt="" className="img-fluid" width={300} />
            </div>
            <div className="col-md-9 col-sm-12">
              <p className="topic-shop">ยินดีต้อนรับคุณ Maruko 👋 </p>
              <p className="detail-shop">
                &nbsp;&nbsp;&nbsp;&nbsp;ขอบคุณที่ไว้วางใจเราและสนับสนุนเรามาโดยตลอด
                ถั่วงอกของเราผลิตใหม่ในทุกวัน รับประกันคุณภาพสนใจสั่งซื้อกดที่ร้านค้าได้เลย 🛒
              </p>
              <p className="detail-shop">

              </p>
              <p className="contact-shop mb-3 mt-5">
                ช่องทางการติดต่อ ☎️ 012-345-6789 หรือ 📱 ทางไลน์ @beansproutsbyjazz
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="HowTo mt-4 d-md-flex flex-wrap">
        <div className="col-md-6 col-sm-12">
          <img src={how} alt="How to buy" className="chatbotimg" />
        </div>
        <hr></hr>
        <div className="col-md-6 col-sm-12 mt-3 mt-md-0">
          <img src={bot} alt="chatbot img" className="chatbotimg" />
        </div>

      </div>

    </div>
  );
}
