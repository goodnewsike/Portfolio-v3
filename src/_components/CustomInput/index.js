import React from 'react';
import {withFormsy} from 'formsy-react';

const CustomInput = (props) => {
   const changeValue = (e) => {
      props.onValueChange && props.onValueChange(e.currentTarget.value);
   };
   const errorMessage = props.errorMessage || props.valError;

   const ErrorText = () =>
      typeof errorMessage === 'object' ? (
         errorMessage.map((message, i) => (
            <span key={i} className="text-danger mt-1 d-block">
               {message}
            </span>
         ))
      ) : (
         <span className="text-danger mt-2 d-block">{errorMessage}</span>
      );

   return (
      <div className={props.mainWrapperClassName}>
         {props.labelText && <span className={props.labelClassName}>{props.labelText}</span>}
         <div className={props.wrapperClassName}>
            {props.leftIcon}
            {props.rightIcon}
            {props.textarea ? (
               <textarea
                  onChange={changeValue}
                  name={props.name}
                  placeholder={props.placeholder}
                  className={props.className}
                  value={props.value || ''}
                  disabled={props.disabled}
                  error={errorMessage}
                  rows={props.rows}
               />
            ) : (
               <input
                  onChange={changeValue}
                  name={props.name}
                  type={props.type || 'text'}
                  placeholder={props.placeholder}
                  className={props.className}
                  value={props.value || ''}
                  disabled={props.disabled}
                  error={errorMessage}
               />
            )}
         </div>
         {errorMessage && <ErrorText />}
      </div>
   );
};

export default withFormsy(CustomInput);
