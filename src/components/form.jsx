import React from 'react'

export const form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: 'India',
        zipCode: '',
        comments: false,
        candidates: false,
        offers: false,
        pushNotification: ""
      })
      function changeHandler(event) {
        let { name, value, type, checked } = event.target
        let updatedData = { ...formData, [name]: type == "checkbox" ? checked : value };
        setFormData(updatedData)
        console.log(updatedData);
      }
    
      function submitHandler(event) {
        event.preventDefault();
        console.log(formData);
    
      }
    
    
    return (
        <div>
            <div className='bg-white p-10 shadow-xl rounded-2xl'>

                <form onSubmit={submitHandler}>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" placeholder='Enter your first name' name='firstName' value={formData.firstName} onChange={changeHandler} />
                    <br />

                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" placeholder='Enter your last name' name='lastName' value={formData.lastName} onChange={changeHandler} />
                    <br />

                    <label htmlFor="email">Email: </label>
                    <input type="email" placeholder='Enter your email' name='email' value={formData.email} onChange={changeHandler} />
                    <br />

                    <label htmlFor="country">Country: </label>
                    <select name="country" id="country" value={formData.country} onChange={changeHandler}>
                        <option value="india">India</option>
                        <option value="china">China</option>
                        <option value="japanese">Japanese</option>
                        <option value="usa">USA</option>
                    </select>
                    <br />

                    <label htmlFor="zipCode">ZIP: </label>
                    <input type="number" placeholder='Enter your zip' name='zipCode' value={formData.zipCode} onChange={changeHandler} max={999999} className='' />
                    <br />

                    <fieldset>
                        <legend>By emails</legend>
                        <div className='flex'>
                            <input type="checkbox" name="comments" id="comments" checked={formData.comments} onChange={changeHandler} />
                            <div>
                                <label htmlFor="comments">Comments</label>
                                <p>get notified when someone post a comment on a posting</p>
                            </div>
                            <br />
                        </div>

                        <div className='flex'>
                            <input type="checkbox" name="candidates" id="candidates" checked={formData.candidates} onChange={changeHandler} />
                            <div>
                                <label htmlFor="candidates">Candidates</label>
                                <p>get notified when someone post a candidates on a posting</p>
                            </div>
                            <br />
                        </div>

                        <div className='flex'>
                            <input type="checkbox" name="offers" id="offers" checked={formData.offers} onChange={changeHandler} />
                            <div>
                                <label htmlFor="offers">Offers</label>
                                <p>get notified when someone post a offers on a posting</p>
                            </div>
                        </div>

                    </fieldset>
                    <fieldset>
                        <legend>Push notification</legend>
                        <p>These are delivered via sms to your mobile phone</p>
                        <div className='flex'>
                            <input type="radio" name="pushNotification" value="everything" id="everything" onChange={changeHandler} />
                            <div>
                                <label htmlFor="everything">Everything</label>
                                <p>get notified when someone post a comment on a posting</p>
                            </div>
                            <br />
                        </div>

                        <div className='flex'>
                            <input type="radio" name="pushNotification" id="pushEmail" value="pushEmail" onChange={changeHandler} />
                            <div>
                                <label htmlFor="pushEmail">Same As Email</label>
                                <p>get notified when someone post a candidates on a posting</p>
                            </div>
                            <br />
                        </div>

                        <div className='flex'>
                            <input type="radio" name="pushNotification" value="pushNothing" id="pushNothing" onChange={changeHandler} />
                            <div>
                                <label htmlFor="pushNothing">No Push Notification</label>
                                <p>get notified when someone post a offers on a posting</p>
                            </div>
                        </div>

                    </fieldset>
                    <button>Submit</button>

                </form>
            </div>
        </div>
    )
}
