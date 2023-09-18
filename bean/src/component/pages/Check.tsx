// import React from "react";

type Props = {};

// const status_order = ['กำลังเตรียมสินค้า','กำลังจัดส่ง','ยกเลิก','จัดส่งสำเร็จ']

export default function Check({ }: Props) {
  return (
    <div className="content">
      <div className="Search-Box">
        <div className="row">
          <div className="col-md-2">
            <div className="mb-3">
              <label htmlFor="searchbox" className="form-label">
                ค้นหา
              </label>
              <input type="text" className="form-control" id="searchbox" />
              <div className="form-text"></div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="mb-3">
              <label htmlFor="searchDate" className="form-label">
                ค้นหาด้วยวันที่
              </label>
              <input type="date" className="form-control" id="searchDate" />
              <div className="form-text"></div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="mb-3">
              <label htmlFor="exampleFormControlSelect1" className="form-label">
                ค้นหาจากสถานะ
              </label>
              <select className="form-select" id="exampleFormControlSelect1">
                <option value="option1">คำสั่งซื้อทั้งหมด</option>
                <option value="option2">เตรียมสินค้า</option>
                <option value="option3">กำลังจัดส่ง</option>
                <option value="option4">ยกเลิก</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="order mt-4">
        <div className="d-flex">
          <div className="col-md-12 row">
            <div className="col-md-6">
              <div className="order-box">
                <div className="top-order d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-3 flex-start">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1538/1538952.png"
                      width={40}
                      alt=""
                    />
                    <p className="topic-order mt-2">#SPR01</p>
                  </div>
                  <div className="status-order" style={{ backgroundColor: 'orange' }}>
                    <p>กำลังเตรียมสินค้า</p>
                  </div>
                </div>

                <hr />
                <table className="table-light mt-3">
                  <tbody>
                    <tr>
                      <td>ผู้ซื้อ</td>
                      <td>| Maruko Chann</td>
                    </tr>
                    <tr>
                      <td style={{ width: "40%" }}>จำนวน</td>
                      <td>| 3 กิโลกรัม</td>
                    </tr>
                    <tr>
                      <td>วันที่สั่ง</td>
                      <td>| 12/07/2023</td>
                    </tr>
                    <tr>
                      <td>ที่อยู่ในการจัดส่ง</td>
                      <td>| ข้างหน้า อบต. เตาปูน เลยมานิดนึง</td>
                    </tr>
                    <tr>
                      <td>เบอร์ติดต่อ</td>
                      <td>| 064-123-7569</td>
                    </tr>
                    <tr>
                      <td>ยอดรวม</td>
                      <td>| 300 บาท</td>
                    </tr>
                  </tbody>
                </table>
                <div className="receipt d-flex justify-content-end">
                  <button className="btn btn-success">ใบเสร็จ</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
            <div className="order-box">
                <div className="top-order d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-3 flex-start">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1538/1538952.png"
                      width={40}
                      alt=""
                    />
                    <p className="topic-order mt-2">#SPR02</p>
                  </div>
                  <div className="status-order" style={{ backgroundColor: '#cdc8e9' }}>
                  <p >ระหว่างการจัดส่ง</p>
                  </div>
                </div>

                <hr />
                <table className="table-light mt-3">
                  <tbody>
                    <tr>
                      <td>ผู้ซื้อ</td>
                      <td>| Maruko Chann</td>
                    </tr>
                    <tr>
                      <td style={{ width: "40%" }}>จำนวน</td>
                      <td>| 3 กิโลกรัม</td>
                    </tr>
                    <tr>
                      <td>วันที่สั่ง</td>
                      <td>| 12/07/2023</td>
                    </tr>
                    <tr>
                      <td>ที่อยู่ในการจัดส่ง</td>
                      <td>| ข้างหน้า อบต. เตาปูน เลยมานิดนึง</td>
                    </tr>
                    <tr>
                      <td>เบอร์ติดต่อ</td>
                      <td>| 064-123-7569</td>
                    </tr>
                    <tr>
                      <td>ยอดรวม</td>
                      <td>| 300 บาท</td>
                    </tr>
                  </tbody>
                </table>
                <div className="receipt d-flex justify-content-end">
                  <button className="btn btn-success">ใบเสร็จ</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
