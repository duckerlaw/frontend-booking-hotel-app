import './ReviewMain.css';
import yourrating from '../../img/yourrating.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function ReviewMain() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobilePhone: '',
    errorFirstName: '',
    errorLastName: '',
    errorEmail: '',
    errorMobilePhone: '',
    firstNameColor: '',
    lastNameColor: '',
    emailColor: '',
    mobilePhoneColor: '',
  });

  const validateForm = (e) => {
    e.preventDefault();
    setFormState((prevState) => {
      const errors = {
        errorFirstName: '',
        errorLastName: '',
        errorEmail: '',
        errorMobilePhone: '',
        firstNameColor: '',
        lastNameColor: '',
        emailColor: '',
        mobilePhoneColor: '',
      };

      if (prevState.firstName === '') {
        errors.errorFirstName = 'กรุณาป้อนชื่อจริง';
        errors.firstNameColor = 'red';
      } else {
        errors.firstNameColor = 'green';
      }

      if (!prevState.email.includes('@')) {
        errors.errorEmail = 'รูปแบบอีเมลไม่ถูกต้อง';
        errors.emailColor = 'red';
      } else {
        errors.emailColor = 'green';
      }

      if (prevState.lastName === '') {
        errors.errorLastName = 'กรุณาป้อนนามสกุล';
        errors.lastNameColor = 'red';
      } else {
        errors.lastNameColor = 'green';
      }

      if (
        prevState.mobilePhone === '' ||
        !/^[0-9]+$/.test(prevState.mobilePhone)
      ) {
        errors.errorMobilePhone = 'เบอร์โทรศัพท์ไม่ถูกต้อง';
        errors.mobilePhoneColor = 'red';
      } else {
        errors.mobilePhoneColor = 'green';
      }
      if (
        errors.firstNameColor == 'green' &&
        errors.lastNameColor == 'green' &&
        errors.emailColor == 'green' &&
        errors.mobilePhoneColor == 'green'
      ) {
        navigate('/payment');
      }

      return { ...prevState, ...errors };
    });    
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  // const isFormValid = () => {
  //   return (
  //     formState.firstName &&
  //     formState.lastName &&
  //     formState.email &&
  //     formState.mobilePhone
  //   );
  // };

  return (
    <section className="review-main">
      <div className="review-main-container">
        <div className="review-main-form">
          <div className="review-main-yourbooking">
            <div className="review-main-yourbooking-header">
              <p className="review-main-yourbooking-title">
                Review your booking
              </p>
              <div className="review-main-yourbooking-rating">
                <p className="review-main-yourbooking-namehotel">
                  Holiday In Resort
                </p>
                <img src={yourrating} alt="yourrating" />
              </div>
              <p className="review-main-yourbooking-detail">
                Tambudki, Arpora, goa, Goa, India
                <br />
                This hotel is reviewed by global firm
              </p>
            </div>
            <div className="review-main-yourbooking-img">
              <img
                src="https://via.placeholder.com/230x105"
                alt="hotel-review"
              />
            </div>
          </div>
          <div className="review-main-yourbooking-bookdate">
            <div className="review-main-yourbooking-checkin">
              <p className="review-main-yourbooking-checkdate">Check-in</p>
              <p className="review-main-yourbooking-checktitle">
                Sunday 21, Dec
              </p>
              <p className="review-main-yourbooking-checkdate">10am</p>
            </div>
            <button className="review-main-yourbooking-checkbtn">
              1 night
            </button>
            <div className="review-main-yourbooking-checkout">
              <p className="review-main-yourbooking-checkdate">Check-out</p>
              <p className="review-main-yourbooking-checktitle">
                Monday 22,Dec
              </p>
              <p className="review-main-yourbooking-checkdate">10am</p>
            </div>
            <div className="review-main-yourbooking-checktitle">
              2 Adult - 1 room
            </div>
          </div>
          <form
            className="review-main-yourbooking-guestdetail"
            onSubmit={validateForm}
          >
            <p className="review-main-yourbooking-guestdetail-title">
              Guest Details
            </p>
            <div className="review-main-yourbooking-guestdetail-wrap">
              <div className="review-main-yourbooking-guestname">
                <input
                  name="firstName"
                  value={formState.firstName}
                  onChange={handleChange}
                  style={{ borderColor: formState.firstNameColor }}
                  type="text"
                  className="review-main-yourbooking-guestdetail"
                  placeholder="First Name"
                />
                <small style={{ color: formState.firstNameColor }}>
                  {formState.errorFirstName}
                </small>
                <input
                  name="lastName"
                  value={formState.lastName}
                  onChange={handleChange}
                  style={{ borderColor: formState.lastNameColor }}
                  type="text"
                  className="review-main-yourbooking-guestdetail"
                  placeholder="Last Name"
                />
                <small style={{ color: formState.lastNameColor }}>
                  {formState.errorLastName}
                </small>
              </div>
              <div className="review-main-yourbooking-guestcontract">
                <input
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  style={{ borderColor: formState.emailColor }}
                  type="text"
                  className="review-main-yourbooking-guestdetail"
                  placeholder="E-mail address"
                />
                <small style={{ color: formState.emailColor }}>
                  {formState.errorEmail}
                </small>
                <input
                  name="mobilePhone"
                  value={formState.mobilePhone}
                  onChange={handleChange}
                  style={{ borderColor: formState.mobilePhoneColor }}
                  type="text"
                  className="review-main-yourbooking-guestdetail"
                  placeholder="Mobile number"
                />
                <small style={{ color: formState.mobilePhoneColor }}>
                  {formState.errorMobilePhone}
                </small>
              </div>
            </div>
            <p className="addguest">Add Guest +</p>
            <div className="review-main-yourbooking-request">
              <p className="s-request">Special Request(optional)</p>
              <input type="text" className="s-request-text" />
            </div>
            <button
              type="submit"
              className="review-main-yourbooking-con"
              // disabled={!isFormValid()}
            >
              Continue
            </button>
          </form>
        </div>
        <div className="review-main-cost">
          <div className="review-main-allcost">
            <div className="review-main-costtitle">
              <p>1 room X 1 night</p>
              <p>Total discount</p>
              <p>Price after discount</p>
              <p>Taxes & service fees</p>
              <p className="review-main-allcost-title">Total Amount</p>
            </div>
            <div className="review-main-costamount">
              <p>1,000.00</p>
              <p>0.00</p>
              <p>1,000.00</p>
              <p>140.00</p>
              <p className="review-main-allcost-amount">1,140.00</p>
            </div>
          </div>
          <div className="review-main-warning">
            <p className="review-main-warning-title">Cancellation Charges</p>
            <p className="review-main-warning-subtitle">Non Refundable</p>
            <p className="review-main-warning-detail">
              Penalty may be charged by the airline & by MMT
              <br />
              based on how close to departure date you cancel.
              <br />
              View fare rules to know more.
            </p>
            <p className="review-main-warning-from">VIEW POLICY</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewMain;
