import React, {useState} from "react";

import classes from "./AddressForm.module.css";

const AddressForm = () => {
    const [form, setForm] = useState({
        firstName: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "First Name"
            },
            value: "",
            validation: {
                required: true
            },
            valid: true,
            touched: false
        },
        lastName: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "Last Name"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        address: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "Address"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        email: {
            elementType: "input",
            elementConfig: {
                type: "email",
                placeholder: "Email"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        city: {
            elementType: "input",
            elementConfig: {
                placeholder: "City"
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        zip: {
            elementType: "input",
            elementConfig: {
                placeholder: "Zip / Postal Code"
            },
            value: "",
            validation: {
                required: true
            },
            valid: true,
            touched: false
        }
    });

    // const [formIsValid, setFormIsValid] = useState(false);
    // const [candleImage, setCandleImage] = useState(<CandleImg />);
    // const [imageAsFile, setImageAsFile] = useState("");
    // const [imgLoading, setImgLoading] = useState(false);
    // const [status, setStatus] = useState(null);

    // useEffect(() => {
    //     setFormIsValid(false);
    //     const updatedCandle = {
    //         ...form
    //     };

    //     let setCandleName;
    //     let setCandleImg;

    //     if (props.setCandleId) {
    //         const setCandle = props.candles.filter(candle => candle.id === props.setCandleId);
    //         setFormIsValid(true);
    
    //         if (setCandle.length !== 0) {
    //             let setCandleRealm = setCandle[0].realm;
    //             setCandleName = setCandle[0].name;
    //             setCandleImg = setCandle[0].img;
    //             const setCandlePriceDollars = setCandle[0].priceDollars;
    //             const setCandlePriceCents = setCandle[0].priceCents;
    //             const setCandleDescription = setCandle[0].description;
        
    //             const setCandleInfo = [setCandleRealm, setCandleName, setCandlePriceDollars, setCandlePriceCents, setCandleDescription, setCandleImg];
        
    //             updatedCandle.realm.elementConfig.options = props.realms.map(realm => ({
    //                 value: realm.id, 
    //                 displayValue: realm.name
    //             }));
                
    //             props.realms.forEach(realm => {
    //                 if (realm.id === setCandleRealm) {
    //                     setCandleRealm = realm.name;
    //                 }
    //             });
        
    //             let i = 0;
            
    //             for (let key in updatedCandle) {
    //                 if (key !== "img") {
    //                     updatedCandle[key].value = setCandleInfo[i];
    //                     i++;
    //                 }
    //             }
    //         } else {
    //             updatedCandle.realm.elementConfig.options = props.realms.map(realm => ({
    //                 value: realm.id, 
    //                 displayValue: realm.name
    //             }));
            
    //             for (let key in updatedCandle) {
    //                 updatedCandle[key].value = "";
    //             }

    //         }
    //     } else {
    //         updatedCandle.realm.elementConfig.options = props.realms.map(realm => ({
    //             value: realm.id, 
    //             displayValue: realm.name
    //         }));
            
    //         for (let key in updatedCandle) {
    //             updatedCandle[key].value = "";
    //         }
    //     }

    //     setForm(updatedCandle);
    //     setCandleImage(<CandleImg 
    //         name={setCandleName}
    //         img={setCandleImg} />);
    // }, [props.candles, props.realms, props.setCandleId]);

    // function submitHandler(event) {
    //     event.preventDefault();

    //     let formData = {};
        
    //     for (let formElementIdentifier in form) {
    //         if (formElementIdentifier !== "img") {
    //             formData[formElementIdentifier] = form[formElementIdentifier].value;
    //         }
    //     }

    //     if (!formData.realm) {
    //         formData = {
    //             ...formData,
    //             realm: props.realms[0].id
    //         }
    //     }

    //     if (form.img.value) {
    //         const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile);

    //         uploadTask.on("state_changed", snapshot => {
    //             setImgLoading(true);
    //             setStatus(<ProgressBar animated variant="success" now={(snapshot.bytesTransferred / snapshot.totalBytes) * 100} />);
    //         }, err => {
    //             console.log(err);
    //         }, () => {
    //             storage.ref("images").child(imageAsFile.name).getDownloadURL()
    //                 .then(firebaseUrl => {
    //                     formData = {
    //                         ...formData,
    //                         img: firebaseUrl,
    //                         imgName: imageAsFile.name
    //                     };
                
    //                     if (props.setCandleId) {
    //                         props.onEditCandle(props.token, formData, props.setCandleId);
    //                     } else {
    //                         props.onAddCandle(props.token, formData);
    //                     }

    //                     setImgLoading(false);
    //                     setStatus(null);
    //                     props.onClick();
    //                 });
    //         });
    //     } else {
    //         const setCandle = props.candles.filter(candle => candle.id === props.setCandleId);

    //         if (props.setCandleId) {
    //             formData = {
    //                 ...formData,
    //                 img: setCandle[0].img
    //             };
    //         }

    //         if (props.setCandleId) {
    //             props.onEditCandle(props.token, formData, props.setCandleId);
    //         } else {
    //             props.onAddCandle(props.token, formData);
    //         }

    //         props.onClick();
    //     }
    // }

    // function inputChangedHandler(event, inputIdentifier) {
    //     const updatedCandle = {
    //         ...form
    //     };
    //     const updatedCandleElement = { 
    //         ...updatedCandle[inputIdentifier]
    //     };

    //     console.log(event.target);
        
    //     if (event.target.type === "file") {
    //         const image = event.target.files[0];
    //         setImageAsFile(imageFile => (image));
    //     }

    //     updatedCandleElement.value = event.target.value;
    //     updatedCandleElement.valid = checkValidity(updatedCandleElement.value, updatedCandleElement.validation);
    //     updatedCandleElement.touched = true;
    //     updatedCandle[inputIdentifier] = updatedCandleElement;
        
    //     let formIsValid = true;
        
    //     for (let inputIdentifier in updatedCandle) {
    //         formIsValid = updatedCandle[inputIdentifier].valid && formIsValid;
    //     }
        
    //     setForm(updatedCandle);
    //     setFormIsValid(formIsValid);
    // }

    // function checkValidity(value, rules) {
    //     let isValid = true;
    //     if (!rules) {
    //         return true;
    //     }
        
    //     if (rules.required) {
    //         isValid = value.trim() !== '' && isValid;
    //     }

    //     if (rules.isNumeric) {
    //         const pattern = /^\d+$/;
    //         isValid = pattern.test(value) && isValid
    //     }

    //     return isValid;
    // }

    // const formElementsArray = [];
    
    // for (let key in form) {
    //     formElementsArray.push({
    //         id: key,
    //         config: form[key]
    //     });
    // }

    // let newForm = (
    //     <form onSubmit={submitHandler}>
    //         {formElementsArray.map(formElement => (
    //             <Input 
    //                 key={formElement.id}
    //                 id={formElement.id}
    //                 elementType={formElement.config.elementType}
    //                 elementConfig={formElement.config.elementConfig}
    //                 value={formElement.config.value}
    //                 invalid={!formElement.config.valid}
    //                 shouldValidate={formElement.config.validation}
    //                 touched={formElement.config.touched}
    //                 label={formElement.config.label}
    //                 changed={(event) => inputChangedHandler(event, formElement.id)} />
    //         ))}
    //         <Button btnType="Success" disabled={!formIsValid}>SUBMIT</Button>
    //         <div className={classes.Cancel} onClick={props.onClick}>CANCEL</div>
    //     </form> 
    // );

    // if (props.loading || imgLoading) {
    //     newForm = (
    //         <div className={classes.ImgLoading}>
    //             <Spinner />
    //             {status}
    //         </div>    
    //     );
    // }

    return (
        <div className={classes.CandleEditorForm}>
            {/* {candleImage}
            {newForm} */}
        </div>
    );
}

export default AddressForm;