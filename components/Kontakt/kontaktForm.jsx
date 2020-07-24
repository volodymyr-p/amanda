import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, Input, FormControl, FormHelperText   } from '@material-ui/core';
import TelegramIcon from '@material-ui/icons/Telegram';
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';

const useStyles = makeStyles({
  root: {
    '& > *': {
      paddingTop: '60px',
      paddingBottom: '60px',
      width: '90%'
    },
  },
  formControl: {
    marginTop: '20px',
    width: '100%'
  },
  icon: {
    margin: '10px'
  }
});

const kontaktForm = () => {
  const classes = useStyles();
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    betreff: '',
    message: ''
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        name: '',
        email: '',
        betreff: '',
        message: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  return (
 <div className="kontaktContainer">
      <div className='kontakt'>
          <form className={classes.root} onSubmit={handleOnSubmit} autoComplete="off">
            <div className='fieldsContainer'>

              <div className='formLabel'>
                <p>Kontakt</p>
              </div>

              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="my-input">Dein Name</InputLabel>
                <Input 
                id="name" 
                type="text" 
                required 
                value={inputs.name} 
                onChange={handleOnChange}
                inputProps={{
                  maxLength: 50,
                }}
                />
              </FormControl>

              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="my-input">Deine E-Mail</InputLabel>
                <Input 
                  id="email" 
                  type="email" 
                  required 
                  value={inputs.email} 
                  onChange={handleOnChange}
                  inputProps={{
                    maxLength: 100,
                  }}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="my-input">Betreff</InputLabel>
                <Input 
                id="betreff" 
                type="text" 
                required 
                value={inputs.betreff} 
                onChange={handleOnChange}
                inputProps={{
                  maxLength: 200,
                }}
                />
              </FormControl>

              <FormControl className={classes.formControl}>
                <TextField 
                  multiline 
                  type="text" 
                  id="message" 
                  label="Deine Nachicht" 
                  value={inputs.message} 
                  onChange={handleOnChange}
                  inputProps={{
                    maxLength: 500,
                  }}
                  />
              </FormControl>
              
              <button type="submit" className="submitButton">SEND MESSAGE</button>

            </div>
          </form>
      </div>

      <div className="address"> 
        <div className="content">
          <h4 className="title">Adresse</h4>
          <p className="description">Momentan erreichst du uns am besten per Mail.</p>

          <div className='contactInfo'>
            <div className='contactDetails'>
              <PhoneIcon className={classes.icon}/>
              <p>+41 coming soon</p>
            </div>
            <div className='contactDetails'>
              <TelegramIcon className={classes.icon}/>
              <p>info@amanda-technology.ch</p>
            </div>
            <div className='contactDetails'>
              <RoomIcon className={classes.icon}/>
              <p>Bern, CH</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .submitButton {
          margin-top: 50px;
          background: linear-gradient(90deg,#ff8f00,#ffe180);
          color: #fff;
          font-size: 12px;
          letter-spacing: 2px;
          padding: 15px 30px;
          height: 40px;
          border: 1px solid #2cc3bd;
          border-radius: 30px
        }
        .contactInfo {
          color: #fff;
          padding-top: 50px;
        }
        .formLabel {
          color: #4c5462;
          font-size: 30px;
          font-weight: 800;
          text-align: left;
        }
        .icon {
          padding-right: 10px;
        }
        .title {
          color: #fff;
          font-size: 30px;
          font-weight: 800;
          text-align: left;
        }
        .fieldsContainer{
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 80px;
        }
        .contactDetails {
          display: flex;
          flex-direction: row;
          align-items: center
        }
        .kontaktContainer {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          height: auto;
          padding-top: 100px;
          padding-bottom: 100px;
          flex-direction: row;
        }
        .address {
          width: 45%;
          height: 700px;
          background-color: #4c5462;
        }
        .kontakt {
          width: 65%;
          height: 700px;
          background-color: #fff;
        }
        .content {
          padding-left: 100px;
          padding-right: 100px;
          padding-bottom: 100px;
          padding-top: 70px;
          color: #fff;
        }
        .footer {
          width: 100%;
          padding-top: 340px;
          background-color: #2b323f;
        }

        @media (min-width: 768px) and (max-width: 1367px) {
          .content {
            padding-left: 20px;
            padding-right: 20px;
          }
          .fieldsContainer{
            padding-left: 40px;
            padding-right: 40px;
          }
        }
        @media (max-width: 767px)  {
          .kontaktContainer {
            flex-direction: column;
          }
          .address {
            width: 45%;
            height: 400px;
            background-color: #4c5462;
          }
          .kontakt {
            width: 65%;
            height: 400px;
            background-color: #fff;
          }
        }
        @media (max-width: 768px) {
          .address {
            width: 90%;
            height: 500px;
            background-color: #4c5462;
          }
          .kontakt {
            width: 90%;
            height: 600px;
            background-color: #fff;
          }
          .kontaktContainer {
            width: 100%;
            padding-top: 30px;
            padding-bottom: 30px;
          }
          .fieldsContainer{
            padding: 10px;
          }
          .footer {
            padding-top: 40px;
          }
          .content {
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 50px;
            padding-top: 50px;
            color: #fff;
          }
        }
      `}</style>
    </div>
    // <main>
    //   <form onSubmit={handleOnSubmit}>
    //     <label htmlFor="email">Email</label>
    //     <input
    //       id="email"
    //       type="email"
    //       onChange={handleOnChange}
    //       required
    //       value={inputs.email}
    //     />
    //     <label htmlFor="message">Message</label>
    //     <textarea
    //       id="message"
    //       onChange={handleOnChange}
    //       required
    //       value={inputs.message}
    //     />
    //     <button type="submit" disabled={status.submitting}>
    //       {!status.submitting
    //         ? !status.submitted
    //           ? 'Submit'
    //           : 'Submitted'
    //         : 'Submitting...'}
    //     </button>
    //   </form>
    //   {status.info.error && (
    //     <div className="error">Error: {status.info.msg}</div>
    //   )}
    //   {!status.info.error && status.info.msg && (
    //     <div className="success">{status.info.msg}</div>
    //   )}
    // </main>
  )
}
export default kontaktForm