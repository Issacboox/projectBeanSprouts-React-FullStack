// import React from 'react';

type Props = {};

export default function Setting({ }: Props) {
  return (
    <div className="content">
      <p className='privateinfo'>ข้อมูลส่วนตัว</p>
      <div className="d-flex flex-wrap">
        <div className="col-md-2 ">
          <img src="https://cdn-icons-png.flaticon.com/512/147/147137.png" alt="" className='profileSet' />
        </div>
        <div className="ms-3 col-md-4 col-sm-12">
          <div className="infoSetting">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="username"
                value={'Maruko'}
              />
              <label htmlFor="username">ชื่อบัญชี</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="tel"
                className="form-control"
                id="telephoneNum"
                placeholder=""
                value={'064-7166930'}
              />
              <label htmlFor="telephoneNum">เบอร์โทรศัพท์</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                className="form-control"
                rows={5}
                id="address"
                defaultValue="บ้านหัวบึง 66 หมู่ 5 ตำบล เตาปูน อำเภอ แก่งคอย จังหวัด สระบุรี 18110"
              style={{height:'120px'}}/>
              <label htmlFor="address">ที่อยู่</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="lineId"
                value={'Maruko089'}
              />
              <label htmlFor="lineId">ไอดีไลน์</label>
            </div>
            <button className='btn btn-success float-right'>บันทึก</button>
          </div>
        </div>
      </div>
    </div>
  );
}
