import { signupCreate } from '../../services/signupCustomer/signupCustomer';

const formEmailPsw = `
  <div class="form-email-psw">
    <div class="form-email">
      <label class="form-email_label" for="email">E-mail*</label>
      <input class="form-email_input email" type="email" id="email" name="email" minlength="5" required></input>
      <div class="error-message" id="emailError"></div>
    </div>
    <div class="form-psw">
      <label class="form-psw_label" for="psw">Password*</label>
      <input class="form-psw_input psw" type="password" id="psw" name="psw" minlength="8" required></input>
      <div class="error-message"></div>
    </div>
  </div>
`;

const formNameDob = `
  <div class="form-name-dob">
    <div class="form-name">
      <label class="form-first-name_label" for="first-name">First name*</label>
      <input class="form-first-name_input first-name" type="text" id="first-name" name="first-name" minlength="1" required></input>
      <div class="error-message"></div>
      <label class="form-last-name_label" for="last-name">Last name*</label>
      <input class="form-last-name_input last-name" type="text" id="last-name" name="last-name" minlength="1" required></input>
      <div class="error-message"></div>
    </div>
    <div class="form-dob">
      <label class="form-dob_label" for="dob">Date of birth*</label>
      <input class="form-dob_input dob" type="date" id="dob" name="dob" required></input>
      <div class="error-message"></div>
    </div>
  </div>
`;

const countriesList = `
  <option value='BELARUS'>BELARUS</option>
  <option value='BELGIUM'>BELGIUM</option>
  <option value='CANADA'>CANADA</option>
  <option value='CROATIA'>CROATIA</option>
  <option value='CYPRUS'>CYPRUS</option>
  <option value='CZECH REPUBLIC'>CZECH REPUBLIC</option>
  <option value='DENMARK'>DENMARK</option>
  <option value='ESTONIA'>ESTONIA</option>
  <option value='FINLAND'>FINLAND</option>
  <option value='FRANCE'>FRANCE</option>
  <option value='GERMANY'>GERMANY</option>
  <option value='GREECE'>GREECE</option>
  <option value='ICELAND'>ICELAND</option>
  <option value='ITALY'>ITALY</option>
  <option value='LATVIA'>LATVIA</option>
  <option value='LIECHTENSTEIN'>LIECHTENSTEIN</option>
  <option value='LITHUANIA'>LITHUANIA</option>
  <option value='LUXEMBOURG'>LUXEMBOURG</option>
  <option value='MALTA'>MALTA</option>
  <option value='MONACO'>MONACO</option>
  <option value='MONTENEGRO'>MONTENEGRO</option>
  <option value='NORWAY'>NORWAY</option>
  <option value='POLAND'>POLAND</option>
  <option value='PORTUGAL'>PORTUGAL</option>
  <option value='ROMANIA'>ROMANIA</option>
  <option value='SLOVAKIA'>SLOVAKIA</option>
  <option value='SPAIN'>SPAIN</option>
  <option value='SWEDEN'>SWEDEN</option>
  <option value='SWITZERLAND'>SWITZERLAND</option>
  <option value='UNITED KINGDOM'>UNITED KINGDOM</option>
  <option value='UNITED STATES'>UNITED STATES</option>
`;

const formBillingAddress = `
  <div class="form-billing-address">
    <h5 class="form-billing_title">Billing Address</h5>
    <label class="form-country_label for="country"">Country*</label>
    <input class="form-country_input country_bill country" type="text" id="country_bill" name="country" list="countries_bill" required></input>
    <div class="error-message"></div>
    <datalist id="countries_bill">${countriesList}</datalist>
    
    <label class="form-city_label" for="city">City*</label>
    <input class="form-city_input city_bill city" type="text" id="city" name="city" minlength="1" required></input>
    <div class="error-message"></div>

    <label class="form-street_label" for="street">Street*</label>
    <input class="form-street_input street_bill street" type="text" id="street" name="street" minlength="1" required></input>
    <div class="error-message"></div>

    <label class="form-postalCode_label" for="postalCode">Postal code*</label>
    <input class="form-postalCode_input post_bill postal-code" type="text" id="postalCode" name="postalCode" required></input>
    <div class="error-message"></div>

    <div class="form-default_checkbox">
      <input class="form-default_input bill_default" type="checkbox" id="setDefaultBilling" name="setDefaultBilling">
      <label class="form-default_label" for="setDefaultBilling">Set deafult</label>
    </div>
  </div>
`;

const formShippinAddress = `
  <div class="form-shipping-address">
    <h5 class="form-shipping_title">Shippin Address</h5>
    <label class="form-country_label for="country"">Country*</label>
    <input class="form-country_input country_ship country" type="text" id="country_ship" name="country" list="countries_ship" required></input>
    <div class="error-message"></div>
    <label class="form-city_label" for="city">City*</label>
    <input class="form-city_input city_ship city" type="text" id="city" name="city" minlength="1" required></input>
    <div class="error-message"></div>
    <label class="form-street_label" for="street">Street*</label>
    <input class="form-street_input street_ship street" type="text" id="street" name="street" minlength="1" required></input>
    <div class="error-message"></div>
    <label class="form-postalCode_label" for="postalCode">Postal code*</label>
    <input class="form-postalCode_input post_ship postal-code" type="text" id="postalCode" name="postalCode" required></input>
    <div class="error-message"></div>
    <datalist id="countries_ship">${countriesList}</datalist>
    <div class="form-default_checkbox">
      <input class="form-default_input ship_default" type="checkbox" id="setDefaultShipping" name="setDefaultShipping">
      <label class="form-default_label" for="setDefaultShipping">Set deafult</label>
    </div>
  </div>
`;

const modalWindow = `
  <div id="errorModal" class="modal">
    <div class="modal-content">
      <span class="modal-close">&times;</span>
      <p class="modal-text">One or more sign up fields are not filled in correctly.</p>
    </div>
  </div>
`;

const hasLogin = `
  <p>Already have an account? Log in <a href="/#login">here</a></p>
`;

const createCodeTemplate = (): string => {
  return `
  <section class="form form-container">
    <div class="form-content_wrapper">
      ${formEmailPsw}
      ${formNameDob}
      <div class="form-addresses">
        ${formBillingAddress}
        ${formShippinAddress}
      </div>
      <button class="form-button btn btn--blue" id="form-button">Sign up</button>
      ${modalWindow}
      <div class="form-has-login">${hasLogin}</div>
    </div>
  </section>
  `;
};

export default class SignupFormView {
  public get render(): string {
    return createCodeTemplate();
  }
}

export { formEmailPsw };
