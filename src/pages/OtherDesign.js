import { useState } from 'react';
import { filter, findIndex } from 'lodash';
import '../css/other-design.scss';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import moment from 'moment';
import { AiOutlineCalendar } from 'react-icons/ai';

export const OtherDesign = () => {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);
    const [text] = useState();
    const [text1] = useState();
    const [selection] = useState({});
    const [questions, setQuestions] = useState([{
        question: 'Question 1',
        field: 'question-1',
        type: 'radio',
        show: true,
        options: [{
            label: 'YES',
            value: 'Yes'
        }, {
            label: 'NO',
            value: 'NO'
        }, {
            label: 'N/A',
            value: 'NA'
        }]
    }, {
        question: 'Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.',
        field: 'question-2',
        type: 'radio',
        show: true,
        options: [{
            label: 'YES',
            value: 'Yes'
        }, {
            label: 'NO',
            value: 'NO'
        }, {
            label: 'N/A',
            value: 'NA'
        }]
    }, {
        question: 'a. COV asset tag number',
        field: 'question-3',
        type: 'text',
        show: false,
        condition: 'question-1',
        conditionval: 'Yes',
        options: [{
            label: 'example',
            value: 'value'
        }]
    }, {
        question: 'Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.',
        field: 'question-4',
        show: true,
        type: 'radio',
        options: [{
            label: 'YES',
            value: 'Yes',
        }, {
            label: 'NO',
            value: 'NO'
        }, {
            label: 'N/A',
            value: 'NA'
        }]
    }, {
        question: '5 - Turned in Cell Phone',
        field: 'question-5',
        show: true,
        type: 'radio',
        selceted: 'Yes',
        options: [{
            label: 'YES',
            value: 'Yes',
        }, {
            label: 'NO',
            value: 'NO'
        }, {
            label: 'N/A',
            value: 'NA'
        }]
    }, {
        question: 'if Yes Turned Cell Phone',
        field: 'question-6',
        type: 'text',
        show: false,
        condition: 'question-5',
        conditionval: 'Yes',
        options: [{
            label: 'example',
            value: text1
        }]
    },
    {
        question: 'Turned Cell Phone',
        field: 'question-7',
        type: 'radio',
        show: true,
        options: [{
            label: 'YES',
            value: 'Yes',
        }, {
            label: 'NO',
            value: 'NO'
        }, {
            label: 'N/A',
            value: 'NA'
        }]
    },
    {
        question: 'if Yes Turned Cell Phone',
        field: 'question-8',
        type: 'radio',
        show: true,
        selceted: 'Apple',
        condition: 'question-7',
        conditionval: 'Yes',
        options: [{
            label: 'Apple',
            value: 'Apple',
        }, {
            label: 'Android',
            value: 'Android'
        }]
    },
    {
        question: 'Apple ID & Password',
        field: 'question-9',
        type: 'text',
        show: false,
        condition: 'question-8',
        conditionval: 'Apple',
        options: [{
            label: 'appleid',
            value: text
        }, {
            label: 'applepassword',
            value: 'applepassword'
        }]
    },
    {
        question: 'Android ID & Password',
        field: 'question-10',
        type: 'text',
        show: false,
        condition: 'question-8',
        conditionval: 'Android',
        options: [{
            label: 'androidid',
            value: 'androidid'
        }, {
            label: 'androidpassword',
            value: '',
            placeholder: 'Please enter the Android Password'
        }]
    },
    {
        question: 'Android ID & Password',
        field: 'question-11',
        type: 'text',
        show: false,
        condition: 'question-8',
        conditionval: 'Apple',
        options: [{
            label: 'Example',
            value: 'Example'
        }, {
            label: 'example',
            value: '',
            placeholder: 'Please enter example'
        }]
    },

    ]);
    const textInformationChanged = (event, mainVal, field, value) => {
        // mainVal.options[0].value = event.target.value;
        // console.log('text')

    }
    const informationChanged = (mainModel, field, value) => {
        mainModel.selceted = value;
        hideChildElement(field);
        const question = filter(questions, { condition: field });
        question.map(a => a.show = false);
        if (question.length !== 0) {
            let updateIndex = findIndex(question, { condition: field, conditionval: value });
            updateIndex = updateIndex === -1 ? 0 : updateIndex;
            question[updateIndex].show = question[updateIndex].conditionval === value;
            setQuestions([...questions]);
        }
        selection[field] = value;
        // console.log(selection, question);
    }
    const hideChildElement = (parentId) => {
        const parent = filter(questions, { condition: parentId });
        if (parent.length === 0) return;
        parent.map(a => a.show = false);
        hideChildElement(parent[0].field);
    }

    const [inputValue, setInputValue] = useState('');
    const [isSendHR, setSendHR] = useState(false);
    const [isSendFinance, setSendFinance] = useState(false);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSelect = (date) => {
        setState([date.selection]);
        // console.log(date)
        // setShowDatePicker(!showDatePicker)
        console.log(date, state); // native Date object
    }
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDatePickerClick = () => {
        setShowDatePicker(!showDatePicker);
    }
    const handleApplyClick = () => {
        setShowDatePicker(false);
        // Perform any desired action with the selectedRange values
    };
    return (
        <div>
            <div className='calendar-input' onClick={handleDatePickerClick}>
                <input disabled value={`${moment(state[0].startDate).format('YYYY-MM-DD')} - ${moment(state[0].endDate).format('YYYY-MM-DD')}`} />
                <AiOutlineCalendar className='calendar-icon' />
            </div>
            {showDatePicker &&
                <div className='drp-wrapper'>
                    <DateRangePicker
                        className='custom-date-range-picker'
                        onChange={item => handleSelect(item)}
                        showSelectionPreview={false}
                        moveRangeOnFirstSelection={false}
                        months={1}
                        minDate={new Date('01-01-1900')}
                        maxDate={new Date()}
                        ranges={state}
                        direction="vertical"
                        scroll={{ enabled: true }}
                    // onRangeFocusChange={(item) =>console.log(item)}
                    // direction="horizontal"
                    />
                    <button className='apply-cls' onClick={handleApplyClick}>Apply</button>
                </div>
            }
            {
                questions.map(function (value) {
                    return (
                        value?.show &&
                        <div className='container' key={value.field}>
                            <div className='question' >{value.question}
                            </div>

                            <div className='radio-btn'>
                                {
                                    value.type === 'radio' &&
                                    value.options.map(function (optVal) {
                                        return (
                                            <label key={value.field + '-' + optVal.value} >
                                                <input
                                                    checked={value.selceted === optVal.value}
                                                    onChange={() => informationChanged
                                                        (value, value.field, optVal.value)}
                                                    type="radio"
                                                    value={optVal.value}
                                                    name={'rad' + value.field}
                                                />{optVal.label}
                                            </label>
                                        )
                                    })
                                }
                                {/* <input
                                    type="text"
                                    value={inputValue}
                                    onChange={handleChange}
                                /> */}
                                <div className='input-field'>
                                    {
                                        value.type === 'text' &&
                                        value.options.map(function (textVal) {
                                            return (
                                                <input type='text' key={value.field + '-' + textVal.value} value={textVal.value}
                                                    placeholder={textVal?.placeholder}
                                                    onChange={(event) => textInformationChanged(event, value, value.field)} ></input>
                                            )
                                        })
                                    }
                                </div>


                            </div>
                        </div>
                    )
                })
            }
            <div>

                <label>
                    <input
                        type="checkbox"
                        checked={isSendHR}
                        onChange={() => setSendHR(!isSendHR)}
                    />
                    Send to HR
                </label>

                <label>
                    <input
                        type="checkbox"
                        checked={isSendFinance}
                        onChange={() => setSendFinance(!isSendFinance)}
                    />
                    Send to Finance
                </label>
            </div>
        </div >
    );
}