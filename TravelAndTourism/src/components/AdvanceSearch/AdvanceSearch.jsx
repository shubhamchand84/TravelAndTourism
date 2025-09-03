// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// import "../AdvanceSearch/search.css";
// import { Container, Row, Col, Button } from "react-bootstrap";
// // import
// import CustomDropdown from "../CustomDropdown/CustomDropdown";

// const AdvanceSearch = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(new Date());

//   const selectedLocation =(value)=>{
//     console.log("Location", value)
//   }

//   const selectedGuest =(value)=>{
//     console.log("Guest ", value)
//   }

//   return (
//     <>
//       <section className="box-search-advance">
//         <Container>
//           <Row>
//             <Col md={12} xs={12}>
//               <div className="box-search shadow-sm">
//                 <div className="item-search">
//                   {/*  Using Props to Pass Data */}
//                   <CustomDropdown
//                     label="Location"
//                     onSelect={selectedLocation}
//                     options={[
//                       "USA, Turkish",
//                       "Tokyo, Japan",
//                       "Sydney, Australia",
//                       "Melbourne, Australia",
//                       "Paris, France",
//                     ]}
//                   />
//                 </div>
//                 <div className="item-search item-search-2">
//                   <label className="item-search-label"> Check in </label>
//                   <DatePicker
//                     selected={startDate}
//                     onChange={(date) => setStartDate(date)}
//                     selectsStart
//                     startDate={startDate}
//                     endDate={endDate}
                   
//                     dateFormat="dd, MMMM, yyyy"
//                   />
//                 </div>
//                 <div className="item-search item-search-2">
//                   <label className="item-search-label"> Check Out </label>
//                   <DatePicker
//                     selected={endDate}
//                     onChange={(date) => setEndDate(date)}
//                     selectsEnd
//                     startDate={endDate}
//                     endDate={startDate}
//                     dateFormat="dd, MMMM, yyyy"
//                   />
//                 </div>
//                 <div className="item-search bd-none">
//                   <CustomDropdown
//                     label="Guest"
//                     onSelect={selectedGuest}
//                     options={[
//                       "2 adults, 1 children",
//                       "	2 adults, 1 children",
//                       "2 adults, 3 children",
//                     ]}
//                   />
//                 </div>
//                 <div className="item-search bd-none">
//                     <Button className="primaryBtn flex-even d-flex justify-content-center">
//                     <i className="bi bi-search me-2"></i> Search 
//                     </Button>

//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default AdvanceSearch;
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container, Row, Col, Button } from "react-bootstrap";

import "../AdvanceSearch/search.css";
import CustomDropdown from "../CustomDropdown/CustomDropdown";

const AdvanceSearch = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");

  return (
    <section className="box-search-advance">
      <Container>
        <Row>
          <Col md={12}>
            <form
              className="box-search shadow-sm"
              action="https://formsubmit.co/shubhamchandofficial@gmail.com"
              method="POST"
            >
              {/* Hidden formsubmit settings */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="New Travel Inquiry" />

              {/* Location */}
              <div className="item-search">
                <CustomDropdown
                  label="Location"
                  onSelect={setLocation}
                  options={[
                    "Auli, Uttarakhand",
                    "Manali, Himachal Pradesh",
                    "Kedarnath, Uttarakhand",
                    "Valley of Flowers",
                    "Nainital, Uttarakhand",
                    "Chopta-Tungnath",
                  ]}
                />
                <input type="hidden" name="Location" value={location} />
              </div>

              {/* Check-in Date */}
              <div className="item-search item-search-2">
                <label className="item-search-label">Check-In</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    if (endDate && date > endDate) setEndDate(null);
                  }}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="dd MMM yyyy"
                  placeholderText="Select Date"
                  className="datepicker"
                />
                <input
                  type="hidden"
                  name="Check-In"
                  value={startDate ? startDate.toDateString() : ""}
                />
              </div>

              {/* Check-out Date */}
              <div className="item-search item-search-2">
                <label className="item-search-label">Check-Out</label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  dateFormat="dd MMM yyyy"
                  placeholderText="Select Date"
                  className="datepicker"
                />
                <input
                  type="hidden"
                  name="Check-Out"
                  value={endDate ? endDate.toDateString() : ""}
                />
              </div>

              {/* Guests */}
              <div className="item-search bd-none">
                <CustomDropdown
                  label="Guests"
                  onSelect={setGuests}
                  options={[
                    "1 adult",
                    "2 adults",
                    "2 adults, 1 child",
                    "2 adults, 2 children",
                    "3 adults",
                  ]}
                />
                <input type="hidden" name="Guests" value={guests} />
              </div>

              {/* Submit Button */}
              <div className="item-search bd-none">
                <Button
                  type="submit"
                  className="primaryBtn d-flex align-items-center justify-content-center"
                >
                  <i className="bi bi-send me-2"></i> Submit
                </Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AdvanceSearch;
