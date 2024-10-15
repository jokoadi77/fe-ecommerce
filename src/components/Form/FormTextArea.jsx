

const FormTextArea = ({label, name, defaultValue}) => {
    return (
     <label className="form-control">
          <label className="label">
              <span className="label-text capitalize">
                   {label}
              </span>
          </label>
          <textarea className="textarea textarea-bordered h-40" name={name} defaultValue={defaultValue}></textarea>
     </label>
    )
  }
  
  export default FormTextArea
  