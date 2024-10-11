"use client";
import React from "react";
import Image from 'next/image';
import logo from "/home/waleed/Documents/Web Development/Altaurux Intern/Model Haus Understanding/my-app/public/images/MODEL HAUS-logo.svg";
import dummyUpload from "/home/waleed/Documents/Web Development/Altaurux Intern/Model Haus Understanding/my-app/public/images/upload-dummy.svg";
import dropDownImage from "/home/waleed/Documents/Web Development/Altaurux Intern/Model Haus Understanding/my-app/public/images/dropdown-icon.svg"
import uploadDocIcon from "/home/waleed/Documents/Web Development/Altaurux Intern/Model Haus Understanding/my-app/public/images/upload-doc-icon.svg"
import uploadDoc from "/home/waleed/Documents/Web Development/Altaurux Intern/Model Haus Understanding/my-app/public/images/upload-doc.svg"

const RegisterPage = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // Toggle the state when the select element is focused or clicked
    // const handleToggle = () => setIsOpen(!isOpen);

    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     gender: '',
    //     dateOfBirth: '',
    //     country: '',
    //     city: '',
    //     jobPosition: '',
    //     mobileNumber: ''
    // });

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData(values => ({ ...values, [name]: value }));
    // };

    return (
        <div className="flex items-center gap-5 justify-center md:py-10 sm:py-5 py-4 flex-col">
            {/* Logo portion */}
            <div className="md:w-[202px] w-[70px] md:h-10 h-[14px]">
                <Image src={logo} alt="Logo"/>
            </div>

            {/* Title & Description portion */}
            <div className="flex flex-col gap-3 font-bold items-center w-full text-center md:mt-7 mt-3">
                <p className="display">REGISTER AS CLIENT</p>
                <p className="text-main text-[#696969] 2xl:w-[30%] lg:w-[26%] md:w-[49%] w-[80%] leading-[14px] md:leading-5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium ex sequi laudantium?
                </p>
            </div>

            {/* Photo uploading portion */}
            <div className=" flex md:flex-row flex-col items-center gap-[10px] md:gap-5 2xl:w-[55%] xl:w-[52%] lg:w-[65%] md:w-[84%] w-[89%] px-[17px] md:p-6 md:border md:border-[#DEE2E6] md:rounded-[10px] md:mt-7">
                <div className="w-[60px] h-[60px] rounded-full">
                    <Image 
                    src={
                        dummyUpload
                    }
                    alt="upload"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover rounded-full"
                    />
                </div>
                
                <div className="text-small leading-[14.4px] md:text-left text-center m-2 mr-3">
                    <div className="heading-1 mb-1">Upload new Profile Photo</div>
                    <div className="">Accepted file types: Jpg, jpeg, png</div>
                    <div>
                        Note: burst and live images will be converted to a still image.
                    </div>
                    <div>
                        For best result, upload a square image at least 200 px by 200 px
                    </div>
                </div>
                <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden text-white bg-black rounded-lg group md:ml-auto btn-primary">Upload</button>
            </div>

            {/* Type and self-detail portion */}
            <div className="w-full md:py-6 py-5 flex justify-center flex-col items-center bg-[#FCFCFC]">
                <p className="heading-3 text-left 2xl:w-[55%] xl:w-[52%] lg:w-[65%] md:w-[84%] w-[89%]">Type of Business</p>
                <div className="flex space-x-8 justify-start 2xl:[55%] xl:w-[52%] lg:w-[65%] md:w-[84%] w-[89%] md:mt-4 mt-[10px]">
                    <label className="flex items-center cursor-pointer text-main">
                        <input 
                        type="radio"
                        name="businessType"
                        value="individual"

                        />
                        <span>
                            {/* className={`w-5 h-5 border-2 rounded-full flex justify-center items-center mr-2 ${
                            // selectedType === "individual"
                            ? "border-black"
                            : "border-black"
                            }`} */}
                        </span>
                        INDIVIDUAL
                    </label>

                    <label className="flex items-center cursor-pointer text-main">
                        <input 
                        type="radio"
                        name="businessType"
                        value="business "

                        />
                        <span>

                        </span>
                        BUSINESS
                    </label>
                </div>

                {/* Personal Detail Portion */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] md:gap-4 justify-start 2xl:w-[55%] xl:w-[52%] lg:w-[65%] md:w-[84%] w-[89%] md:mt-6 mt-[14px]">
                    <div>
                        <label className="mr-4">
                            First Name
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Oliiver"
                                // value={formData.firstName}
                                // onChange={handleChange}
                                required
                                className="py-2 pl-6 pr-3 mt-2 block w-full border border-gray-300 rounded-sm"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="">
                            Last Name
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Blake"
                                // value={formData.lastName}
                                // onChange={handleChange}
                                required
                                className="py-2 pl-6 pr-3 mt-2 block w-full border border-gray-300 rounded-sm"
                            />
                        </label>
                    </div>
                    {/* <div>
                        <label>
                            Gender
                            <select 
                                name="gender" 
                                // value={formData.gender} 
                                // onChange={handleChange} 
                                required
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </label>
                    </div> */}
                    <div className="relative w-64 mb-4">
                        <label  className="block text-sm font-medium text-gray-700">Gender</label>
                        <input type="text" id="gender" name="gender" list="genders" placeholder="Select or enter gender" className="mt-1 pl-5 block w-full border border-gray-300 rounded-s m  focus:border-blue-500 focus:outline-none pr-8" />
                        <datalist id="genders">
                            <option value="Male" />
                            <option value="Female" />
                            <option value="Non-binary" />
                            <option value="Other" />
                        </datalist>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events">
                            <Image 
                                src={dropDownImage} // Ensure this path is correct
                                alt="Dropdown Icon"
                                width={14}
                                height={14}
                            />
                        </div>
                    </div>
                    <div>
                        <label>
                            Date of Birth
                            <input
                                type="date"
                                name="dateOfBirth"
                                // value={formData.dateOfBirth}
                                // onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Country
                            <input
                                type="text"
                                name="country"
                                // value={formData.country}
                                // onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            City
                            <input
                                type="text"
                                name="city"
                                // value={formData.city}
                                // onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Current Job Position
                            <input
                                type="text"
                                name="jobPosition"
                                // value={formData.jobPosition}
                                // onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Mobile Number
                            <input
                                type="tel"
                                name="mobileNumber"
                                // value={formData.mobileNumber}
                                // onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </div>
            </div>

            {/* Selection of Document type portion */}
            <div className="w-full md:py-6 flex justify-center flex-col items-center">
                <p className="heading-3 text-left font-bold 2xl:w-[55%] xl:w-[52%] lg:w-[65%] md:w-[84%] w-[89%]">Choose your document type</p>
                <div className="flex space-x-8 justify-start 2xl:w-[55%] xl:w-[52%] lg:w-[65%] md:w-[84%] w-[89%] md:mt-4 mt-3">
                    <label className="flex items-center text-main cursor-pointer">
                        <input 
                        type="radio"
                        name="IdCard"
                        value="idCard"

                        />
                        <span>
                            
                        </span>
                        ID CARD
                    </label>

                    <label className="flex items-center text-main cursor-pointer">
                        <input 
                        type="radio"
                        name="passport"
                        value="passport"

                        />
                        <span>

                        </span>
                        PASSPORT
                    </label>
                </div>
                <div className="flex justify-start 2xl:w-[55%] xl:w-[52%] lg:w-[65%] md:w-[84%] w-[89%] md:mt-6 mt-5 flex-col gap-3">
                    <p className="text-small">Take a photo of your ID card. The photo should be:</p>
                    <div className="ml-[5px] pl-[10px] list-disc text-main leading-5">
                        <li>bright and clear</li>
                        <li>all corners of document should be visible</li>
                    </div>
                </div>
                <div>
                    <input type="file"  accept="image/*" />
                    <input type="file"  accept="image/*" />
                </div>
            </div>
            
            {/* Selfie Proof Portion */}
            <div className="w-full md:py-6 py-5 flex justify-center flex-col items-center bg-[#FCFCFC]">
                <p className="heading-3 text-left font-bold 2xl:w-[55%] xl:w-[52%] lg:w-[65%] md:w-[84%] w-[89%]">Selfie with the Proof</p>

                <p className=" text-base font-light md:leading-[19.2px] leading-[14.5px] italic text-left 2xl:w-[55%] xl:w-[52%] lg:w-[65%] md:w-[84%] w-[89%] md:mt-6 mt-5">Please take a selfie with your document so that its clearly visible and does not cover your face.</p>

                <p className="text-left 2xl:w-[55%] xl:w-[52%] md:leading-[14.4px] leading-[12px] lg:w-[65%] md:w-[84%] w-[89%] text-small text-[#23282D] md:mt-4 mt-[10px]">Our algorithm will compare your face in the selfie to the document photo. Make sure to upload a bright photo where all text is clearly readible.</p>
                <div className="2xl:w-[42%] xl:w-[38%] lg:w-[45%] md:w-[58%] w-[80%] md:mt-6 mt-5 flex items-center justify-center md:gap-6 gap-4">
                    <div className="border border-[#BBBBBB] rounded-lg lg:w-[80%] w-[70%] flex flex-col gap-[10px] items-center justify-center md:p-6 p-3">
                        <Image
                            src={uploadDocIcon}
                            alt="upload"
                            width={1000}
                            height={1000}
                            className="w-9 h-9"
                        />
                        <p className="heading-3">Upload the document</p>
                        <p className="text-main text-center">
                            jpg or pdf should be more than 600KB or 300DPI
                        </p>
                    </div>
                    <div className="lg:w-[20%] w-[30%]">
                        {/* <Image src="public/images/upload-doc.svg" alt="" /> */}
                        <Image
                            src={uploadDoc}
                            alt="image"
                            width={10000}
                            height={10000}
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>

            <div className="2xl:w-[65%] xl:w-[60%] lg:w-[70%] md:w-[84%] w-[89%] md:py-6 gap-5 md:flex-row flex-col flex md:justify-center md:items-center lg:ml-auto lg:mr-[12%] xl:mr-[16%]">
                <div className="flex flex-col gap-4">
                    <label className="flex items-center heading-3">
                        <input
                            type="checkbox"
                            name="termsChecked"
                            id="terms"
                            // onChange={handleChange}
                            className="mr-2 w-4 h-4 border border-black"
                        />
                        <span className="flex leading-6 gap-1">
                            I Agree to the ModelHaus{" "}
                            <p className="text-[#408CFF]"> Terms of Services.</p>{" "}
                        </span>
                    </label>
                    <label className="flex items-center heading-3">
                        <input
                            type="checkbox"
                            name="policyChecked"
                            id="terms"
                            // onChange={handleChange}
                            className="mr-2 w-4 h-4 border border-black"
                        />
                        <span className="flex leading-6 gap-1">
                            I Agree to the ModelHaus{" "}
                            <p className="text-[#408CFF]">Privacy Policy.</p>{" "}
                        </span>
                    </label>
                </div>
                <button className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden text-white ml-[250px] rounded-full bg-black group btn-primary" type="submit">Register</button>
            </div>
        </div>
    );
};

export default RegisterPage;