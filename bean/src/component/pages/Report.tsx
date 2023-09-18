// import React from "react";

type Props = {};

export default function Report({}: Props) {
  return (
    <div className="content">
      <div className="topicRepo">
        <p className="topic">แจ้งปัญหา หรือ เสนอแนะ</p>
        <p className="mb-3">
          ** เมื่อทางร้านได้รับข้อมูลจะรีบทำการตรวจสอบ
          และนำคำแนะนำของลูกค้ามาปรับปรุง ให้มีประสิทธิภาพมากขึ้น
          ขอบคุณที่ไว้วางใจเรา **
        </p>
      </div>
      <div className="reportfrom ">
        <div className="row">
          <div className="container mb-3">
            <div className="radio-tile-group">
              <div className="input-container">
                <input
                  id="problem"
                  className="radio-button"
                  type="radio"
                  name="radio"
                />
                <div className="radio-tile">
                  <div className="icon walk-icon">
                    <img
                      src="https://icon-library.com/images/problem-icon-png/problem-icon-png-18.jpg"
                      alt=""
                      width={50}
                    />
                  </div>
                  <label htmlFor="problem" className="radio-tile-label">
                    แจ้งปัญหา
                  </label>
                </div>
              </div>

              <div className="input-container">
                <input
                  id="suggest"
                  className="radio-button"
                  type="radio"
                  name="radio"
                />
                <div className="radio-tile">
                  <div className="icon bike-icon">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5807/5807413.png"
                      alt=""
                      width={50}
                    />
                  </div>
                  <label htmlFor="suggest" className="radio-tile-label">
                    เสนอแนะ
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-3 mt-2">
            <label htmlFor="topicRepo" className="form-label">
              หัวข้อ *
            </label>
            <input type="text" className="form-control" id="topicRepo" />
          </div>
          <div className="mb-3">
            <label htmlFor="reportDesc" className="form-label">
              รายละเอียด *
            </label>
            <textarea
              className="form-control"
              id="reportDesc"
              rows={5}
              placeholder="โปรดระบุ"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              แนปไฟล์
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>
          <div className="mb-3 buttonConfirm">
            <button
              className=" mt-2 btn btn-success"
              style={{ width: "150px" }}
            >
              ยืนยันและส่ง
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
