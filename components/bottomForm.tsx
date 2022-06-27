import axios from 'axios';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { http } from '../utils/utils';
import toastr from "../utils/toastr";


interface IData {
  firstName?: string;
  lastName?: string;
  email?: string;
  country?: string;
}

const BottomForm = () => {
  const [data, setData] = useState<IData>({
    firstName: "",
    lastName: "",
    email: "",
    country: ""
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    http.post('/register', data).then((res) => {
      toastr.success("Succesfully registered")
      if (data) setSuccess(true)
    
    })
      .catch(err => {
        console.log(err)
        if (err) {
          toastr.error("Registration fail, try again")
        }
      })
      .finally(() => {
        setLoading(false);
        setSuccess(true)

      })
  }

  useEffect(():any => {
    if (success) setData({
      firstName: "",
      lastName: "",
      email: "",
      country: ""
    })
  }, [success])

  return (
    <div className={styles.container}>
      <div className="container mt-10" id="form">
        <div className="flex flex-col md:flex-row w-full">
          <div className="col w-full">
            <h6 className='text-black'>Don&apos;t Miss Anything.</h6>
            <h2 className='text-black'>
              Be the first to know what we&apos;re doing
              - and how you can get more involved.
            </h2>
            <p className='text-black'>Sign up to hear more and get involved.</p>
          </div>
          <div className="w-full">
            <form onSubmit={handleSubmit}>
              <div className="fields-wrapper">
                <div className="fields-set">
                  <input
                    type="text"
                    data-error="Please enter your first name."
                    name="firstName"
                    onChange={handleChange}
                    value={data?.firstName}
                    required
                    placeholder="First name*"
                    className="default-input"
                  />
                </div>
                <div className="fields-set">
                  <input
                    type="text"
                    data-error="Please enter your last name."
                    name="lastName"
                    onChange={handleChange}
                    value={data?.lastName}
                    required
                    placeholder="Last name*"
                    className="default-input"
                  />
                </div>
                <div className="fields-set">
                  <input
                    type="email"
                    data-error="Please enter your email address."
                    name="email"
                    onChange={handleChange}
                    value={data?.email}
                    required
                    placeholder="Your email address*"
                    className="default-input"
                  />
                </div>
                <div className="fields-set">
                  <div className="PYO-select">
                    <select id="dropdown"
                      name="country"
                      onChange={handleChange}
                      data-error="Please select your country."
                      placeholder='Country*'
                      value={data?.country}
                      required >
                      <option value="">Country*</option>
                      <option value="AF">Afghanistan</option>
                      <option value="AL">Albania</option>
                      <option value="DZ">Algeria</option>
                      <option value="AS">American Samoa</option>
                      <option value="AD">Andorra</option>
                      <option value="AO">Angola</option>
                      <option value="AI">Anguilla</option>
                      <option value="AQ">Antarctica</option>
                      <option value="AG">Antigua &amp; Barbuda</option>
                      <option value="AR">Argentina</option>
                      <option value="AM">Armenia</option>
                      <option value="AW">Aruba</option>
                      <option value="AC">Ascension Island</option>
                      <option value="AU">Australia</option>
                      <option value="AT">Austria</option>
                      <option value="AZ">Azerbaijan</option>
                      <option value="BS">Bahamas</option>
                      <option value="BH">Bahrain</option>
                      <option value="BD">Bangladesh</option>
                      <option value="BB">Barbados</option>
                      <option value="BY">Belarus</option>
                      <option value="BE">Belgium</option>
                      <option value="BZ">Belize</option>
                      <option value="BJ">Benin</option>
                      <option value="BM">Bermuda</option>
                      <option value="BT">Bhutan</option>
                      <option value="BO">Bolivia</option>
                      <option value="BA">Bosnia &amp; Herzegovina</option>
                      <option value="BW">Botswana</option>
                      <option value="BV">Bouvet Island</option>
                      <option value="BR">Brazil</option>
                      <option value="IO">
                        British Indian Ocean Territory
                      </option>
                      <option value="VG">British Virgin Islands</option>
                      <option value="BN">Brunei</option>
                      <option value="BG">Bulgaria</option>
                      <option value="BF">Burkina Faso</option>
                      <option value="BI">Burundi</option>
                      <option value="KH">Cambodia</option>
                      <option value="CM">Cameroon</option>
                      <option value="CA">Canada</option>
                      <option value="IC">Canary Islands</option>
                      <option value="CV">Cape Verde</option>
                      <option value="BQ">Caribbean Netherlands</option>
                      <option value="KY">Cayman Islands</option>
                      <option value="CF">Central African Republic</option>
                      <option value="EA">Ceuta &amp; Melilla</option>
                      <option value="TD">Chad</option>
                      <option value="CL">Chile</option>
                      <option value="CN">China</option>
                      <option value="CX">Christmas Island</option>
                      <option value="CP">Clipperton Island</option>
                      <option value="CC">Cocos (Keeling) Islands</option>
                      <option value="CO">Colombia</option>
                      <option value="KM">Comoros</option>
                      <option value="CG">Congo - Brazzaville</option>
                      <option value="CD">Congo - Kinshasa</option>
                      <option value="CK">Cook Islands</option>
                      <option value="CR">Costa Rica</option>
                      <option value="HR">Croatia</option>
                      <option value="CU">Cuba</option>
                      <option value="CW">Curaçao</option>
                      <option value="CY">Cyprus</option>
                      <option value="CZ">Czechia</option>
                      <option value="CI">Côte d’Ivoire</option>
                      <option value="DK">Denmark</option>
                      <option value="DG">Diego Garcia</option>
                      <option value="DJ">Djibouti</option>
                      <option value="DM">Dominica</option>
                      <option value="DO">Dominican Republic</option>
                      <option value="EC">Ecuador</option>
                      <option value="EG">Egypt</option>
                      <option value="SV">El Salvador</option>
                      <option value="GQ">Equatorial Guinea</option>
                      <option value="ER">Eritrea</option>
                      <option value="EE">Estonia</option>
                      <option value="SZ">Eswatini</option>
                      <option value="ET">Ethiopia</option>
                      <option value="FK">Falkland Islands</option>
                      <option value="FO">Faroe Islands</option>
                      <option value="FJ">Fiji</option>
                      <option value="FI">Finland</option>
                      <option value="FR">France</option>
                      <option value="GF">French Guiana</option>
                      <option value="PF">French Polynesia</option>
                      <option value="TF">French Southern Territories</option>
                      <option value="GA">Gabon</option>
                      <option value="GM">Gambia</option>
                      <option value="GE">Georgia</option>
                      <option value="DE">Germany</option>
                      <option value="GH">Ghana</option>
                      <option value="GI">Gibraltar</option>
                      <option value="GR">Greece</option>
                      <option value="GL">Greenland</option>
                      <option value="GD">Grenada</option>
                      <option value="GP">Guadeloupe</option>
                      <option value="GU">Guam</option>
                      <option value="GT">Guatemala</option>
                      <option value="GG">Guernsey</option>
                      <option value="GN">Guinea</option>
                      <option value="GW">Guinea-Bissau</option>
                      <option value="GY">Guyana</option>
                      <option value="HT">Haiti</option>
                      <option value="HM">Heard &amp; McDonald Islands</option>
                      <option value="HN">Honduras</option>
                      <option value="HK">Hong Kong SAR China</option>
                      <option value="HU">Hungary</option>
                      <option value="IS">Iceland</option>
                      <option value="IN">India</option>
                      <option value="ID">Indonesia</option>
                      <option value="IR">Iran</option>
                      <option value="IQ">Iraq</option>
                      <option value="IE">Ireland</option>
                      <option value="IM">Isle of Man</option>
                      <option value="IL">Israel</option>
                      <option value="IT">Italy</option>
                      <option value="JM">Jamaica</option>
                      <option value="JP">Japan</option>
                      <option value="JE">Jersey</option>
                      <option value="JO">Jordan</option>
                      <option value="KZ">Kazakhstan</option>
                      <option value="KE">Kenya</option>
                      <option value="KI">Kiribati</option>
                      <option value="XK">Kosovo</option>
                      <option value="KW">Kuwait</option>
                      <option value="KG">Kyrgyzstan</option>
                      <option value="LA">Laos</option>
                      <option value="LV">Latvia</option>
                      <option value="LB">Lebanon</option>
                      <option value="LS">Lesotho</option>
                      <option value="LR">Liberia</option>
                      <option value="LY">Libya</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="LT">Lithuania</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MO">Macao SAR China</option>
                      <option value="MG">Madagascar</option>
                      <option value="MW">Malawi</option>
                      <option value="MY">Malaysia</option>
                      <option value="MV">Maldives</option>
                      <option value="ML">Mali</option>
                      <option value="MT">Malta</option>
                      <option value="MH">Marshall Islands</option>
                      <option value="MQ">Martinique</option>
                      <option value="MR">Mauritania</option>
                      <option value="MU">Mauritius</option>
                      <option value="YT">Mayotte</option>
                      <option value="MX">Mexico</option>
                      <option value="FM">Micronesia</option>
                      <option value="MD">Moldova</option>
                      <option value="MC">Monaco</option>
                      <option value="MN">Mongolia</option>
                      <option value="ME">Montenegro</option>
                      <option value="MS">Montserrat</option>
                      <option value="MA">Morocco</option>
                      <option value="MZ">Mozambique</option>
                      <option value="MM">Myanmar (Burma)</option>
                      <option value="NA">Namibia</option>
                      <option value="NR">Nauru</option>
                      <option value="NP">Nepal</option>
                      <option value="NL">Netherlands</option>
                      <option value="AN">Netherlands Antilles</option>
                      <option value="NC">New Caledonia</option>
                      <option value="NZ">New Zealand</option>
                      <option value="NI">Nicaragua</option>
                      <option value="NE">Niger</option>
                      <option value="NG">Nigeria</option>
                      <option value="NU">Niue</option>
                      <option value="NF">Norfolk Island</option>
                      <option value="MP">Northern Mariana Islands</option>
                      <option value="KP">North Korea</option>
                      <option value="MK">North Macedonia</option>
                      <option value="NO">Norway</option>
                      <option value="OM">Oman</option>
                      <option value="QO">Outlying Oceania</option>
                      <option value="PK">Pakistan</option>
                      <option value="PW">Palau</option>
                      <option value="PS">Palestinian Territories</option>
                      <option value="PA">Panama</option>
                      <option value="PG">Papua New Guinea</option>
                      <option value="PY">Paraguay</option>
                      <option value="PE">Peru</option>
                      <option value="PH">Philippines</option>
                      <option value="PN">Pitcairn Islands</option>
                      <option value="PL">Poland</option>
                      <option value="PT">Portugal</option>
                      <option value="PR">Puerto Rico</option>
                      <option value="QA">Qatar</option>
                      <option value="RO">Romania</option>
                      <option value="RU">Russia</option>
                      <option value="RW">Rwanda</option>
                      <option value="RE">Réunion</option>
                      <option value="WS">Samoa</option>
                      <option value="SM">San Marino</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="SN">Senegal</option>
                      <option value="RS">Serbia</option>
                      <option value="SC">Seychelles</option>
                      <option value="SL">Sierra Leone</option>
                      <option value="SG">Singapore</option>
                      <option value="SX">Sint Maarten</option>
                      <option value="SK">Slovakia</option>
                      <option value="SI">Slovenia</option>
                      <option value="SB">Solomon Islands</option>
                      <option value="SO">Somalia</option>
                      <option value="ZA">South Africa</option>
                      <option value="GS">
                        South Georgia &amp; South Sandwich Islands
                      </option>
                      <option value="KR">South Korea</option>
                      <option value="SS">South Sudan</option>
                      <option value="ES">Spain</option>
                      <option value="LK">Sri Lanka</option>
                      <option value="BL">St. Barthélemy</option>
                      <option value="SH">St. Helena</option>
                      <option value="KN">St. Kitts &amp; Nevis</option>
                      <option value="LC">St. Lucia</option>
                      <option value="MF">St. Martin</option>
                      <option value="PM">St. Pierre &amp; Miquelon</option>
                      <option value="VC">St. Vincent &amp; Grenadines</option>
                      <option value="SD">Sudan</option>
                      <option value="SR">Suriname</option>
                      <option value="SJ">Svalbard &amp; Jan Mayen</option>
                      <option value="SE">Sweden</option>
                      <option value="CH">Switzerland</option>
                      <option value="SY">Syria</option>
                      <option value="ST">São Tomé &amp; Príncipe</option>
                      <option value="TW">Taiwan</option>
                      <option value="TJ">Tajikistan</option>
                      <option value="TZ">Tanzania</option>
                      <option value="TH">Thailand</option>
                      <option value="TL">Timor-Leste</option>
                      <option value="TG">Togo</option>
                      <option value="TK">Tokelau</option>
                      <option value="TO">Tonga</option>
                      <option value="TT">Trinidad &amp; Tobago</option>
                      <option value="TA">Tristan da Cunha</option>
                      <option value="TN">Tunisia</option>
                      <option value="TR">Turkey</option>
                      <option value="TM">Turkmenistan</option>
                      <option value="TC">Turks &amp; Caicos Islands</option>
                      <option value="TV">Tuvalu</option>
                      <option value="UM">U.S. Outlying Islands</option>
                      <option value="VI">U.S. Virgin Islands</option>
                      <option value="UG">Uganda</option>
                      <option value="UA">Ukraine</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="GB">United Kingdom</option>
                      <option value="US">United States</option>
                      <option value="UY">Uruguay</option>
                      <option value="UZ">Uzbekistan</option>
                      <option value="VU">Vanuatu</option>
                      <option value="VA">Vatican City</option>
                      <option value="VE">Venezuela</option>
                      <option value="VN">Vietnam</option>
                      <option value="WF">Wallis &amp; Futuna</option>
                      <option value="EH">Western Sahara</option>
                      <option value="YE">Yemen</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option>
                      <option value="AX">Åland Islands</option>
                    </select>
                  </div>
                </div>

                <div className="Submit">
                  <input className='hover:bg-white' type="submit" name="submit" value={loading ? "Loading...":"Sign up"} disabled={loading} />
                </div>
              </div>
              {/* <div className="pyo-privacy-policy">
                <input
                  type="checkbox"
                  name="privacy-policy"
                  data-error="Please acknowledge that you want to receive emails from us by checking the box."
                  id="privacy-label"
                />
                <label
                >Yes, I agree to receive emails about the work of Professor Yemi Osinbanjo and
                  the Professor Yemi Osinbanjo Institute.
                  For full information on the use of your data please see our
                  <a href="/privacy-policy">privacy policy</a>.</label>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomForm;