import React, { useEffect, useState } from 'react';
import styles from './Book.module.css';
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { GiTabletopPlayers } from 'react-icons/gi';
import { TiTimes } from 'react-icons/ti';
const BookTable = () => {
    const [open, setOpen] = useState(false);
    const options = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 + '+', 50 + '+', 100 + '+']
    const [phone, setPhone] = useState('')
    const [guest, setguest] = useState('')
    const [date, setDate] = useState('')
    const [day, setDay] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [spot, setSpot] = useState('')
    const [message, setMessage] = useState('')
    const [hours, sethours] = useState(0)
    const [minute, setminute] = useState(0)

    const handleMinute = (inc, dec) => {

        if (inc) {
            if (day === 'fr') {
                setminute(minute > 30 ? 0 : minute + 15)
            }
            else if (day === 'sa') {
                setminute(minute > 30 ? 0 : minute + 15)
            }
            else if (day === 'su') {
                setminute(minute > 30 ? 0 : minute + 15)
            }
            else if (day === 'mo' || day === 'tu' || day === 'we') {
                setminute(minute > 30 ? 0 : minute + 15)
            }
            else if (day === 'th') {
                setminute(minute > 30 ? 0 : minute + 15)
            }
        }
        if (dec) {
            setminute(minute - 15)
        }
    }
    //handle hours
    const handleHours = (inc, dec) => {

        if (inc) {
            if (day === 'fr') {
                sethours(hours > 10 ? 7 : hours + 1)
            }
            else if (day === 'sa') {
                sethours(hours > 11 ? 8 : hours + 1)
            }
            else if (day === 'su') {
                sethours(hours > 8 ? 8 : hours + 1)
            }
            else if (day === 'mo' || day === 'tu' || day === 'we') {
                sethours(hours > 21 ? 7 : hours + 1)
            }
            else if (day === 'th') {
                sethours(hours > 22 ? 7 : hours + 1)
            }
        }
        else if (dec) {

            if (day === 'sa' || day === 'su') {
                sethours(hours < 9 ? 0 : hours - 1)
            }
            else if (day === 'fr' || day === 'mo' || day === 'th' || day === 'tu' || day === 'we') {
                sethours(hours < 8 ? 0 : hours - 1)
            }
        }
    }

    useEffect(() => {
        const dt = new Date(date);
        const day = dt.toLocaleDateString('en', { weekday: 'long' });
        const ddt = (day.slice(0, 2).toLocaleLowerCase())
        setDay(ddt)
        if (ddt === 'sa' || ddt === 'su') {
            sethours(8)
            setminute(30)
        }
        else {
            sethours(7)
            setminute(30)
        }
    }, [date])

    useEffect(() => {
        var curr = new Date();
        curr.setDate(curr.getDate());
        setDate(curr.toISOString().substr(0, 10))
    }, [])
    const onSubmit = (e) => {
        e.preventDefault()
        window.alert(`
        your name is ${name}
        your email is ${email}
        your phone is ${phone}
        your guest is ${guest}
        your time is ${hours}: ${minute}
        your set is ${spot}
        your message is ${message}

        `)
        setMessage('')
    }
    return (
        <section>
            <div onClick={() => setOpen(true)} className="open-table">
                <GiTabletopPlayers />
            </div>
            {open &&
                <div onClick={() => setOpen(false)} className={styles.modal}>
                    <div onClick={(e) => e.stopPropagation()} className={styles.modal_content}>
                        <div className={styles.modal_body}>
                            <div className={`${styles.booking_form}`}>
                                <div>
                                    <div className={styles.header_text}>
                                        <span className="mx-auto">Fields marked by * are mandatory</span>
                                        <TiTimes onClick={()=>setOpen(false)} className={styles.close_btn}/>
                                    </div>
                                    <form onSubmit={onSubmit}>
                                        <div className="d-flex justify-content-around justify-space-around py-3">
                                            <div className="text-center me-2">
                                                    <label className={styles.input_label}>Guest*</label><br />
                                                    <select onChange={(e) => setguest(e.target.value)} className={`py-2 ${styles.bg_color} ${styles.guest_opt}`}>
                                                        {options.map((option, i) => (
                                                            <option className={styles.guest_opt} key={i} value={option}>{option}</option>
                                                        ))}
                                                    </select>
                                            </div>
                                            <div className={styles.datepicker}>
                                                <label className={styles.input_label}>Date*</label><br/>
                                                <input onChange={(e) => setDate(e.target.value)} className={`w-50 pb-2 pt-1 ps-1 pe-1 ${styles.bg_color}`} type="date" name="" id="" defaultValue={date}/>
                                            </div>
                                            <div className="w-100 py-1 text-center">
                                                <label className={styles.input_label}>Time*</label><br />
                                                <div className={styles.input_time}>
                                                    <div className="">
                                                        <span onClick={() => handleHours('dec')} className={styles.inc_btn}>-</span>

                                                        <span className={`p-2 ${styles.bg_color}`}>{hours < 10 ? "0" + hours : hours}</span>

                                                        <span onClick={() => handleHours('inc')} className={styles.inc_btn}>+</span>
                                                    </div>:
                                                    <div className="">
                                                        <span onClick={() => handleMinute('dec')} className={styles.inc_btn}>-</span>

                                                        <span className={`p-2 ${styles.bg_color}`}>
                                                            {minute < 10 ? '0' + minute : minute}</span>
                                                        <span onClick={() => handleMinute('inc')} className={styles.inc_btn}>+</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-around py-3">
                                            <div className="w-100 text-center mx-1">
                                                <label className={styles.input_label}>Email*</label>
                                                <input onChange={(e) => setEmail(e.target.value)} className={`w-100 pb-2 pt-1 ps-1 pe-1 ${styles.bg_color}`} type="email" name="" id="" />
                                            </div>
                                            <div className="w-50 text-center mx-1">
                                                <label className={styles.input_label}>Phone*</label>
                                                <PhoneInput
                                                    className={styles.phone_color}
                                                    placeholder="00000 000000"
                                                    name="phone"
                                                    value={phone}
                                                    onChange={setPhone}
                                                    style={{ width: "100%" }}
                                                    international
                                                    defaultCountry="IN"
                                                    countryCallingCodeEditable={false}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-around py-3">
                                            <div className="w-75 mx-1 my-3">
                                                <select onChange={(e) => setSpot(e.target.value)} className={`w-100 ${styles.bg_color} ${styles.spot_select}`}>
                                                    <option selected>spot selection</option>
                                                    <option value="pool side">Pool side</option>
                                                    <option value="bar side">Bar side</option>
                                                    <option value="ai fresco">AI Fresco</option>
                                                </select>
                                            </div>
                                            <div className="w-75 mx-1 my-3">
                                                <input onChange={(e) => setName(e.target.value)} className={`w-100 ${styles.bg_color} ${styles.name_input}`} type="text" name="" id="" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className={styles.message_box}>
                                            <label className={styles.input_label}>Message</label>
                                            <textarea onChange={(e) => setMessage(e.target.value)} className={`w-100 ${styles.bg_color}`} rows="3"></textarea>
                                        </div>
                                        <div className="text-center my-3">
                                            <button type="submit" className="btn btn-warning px-4">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </section>
    );
};

export default BookTable;
