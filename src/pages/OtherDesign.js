import { useState } from 'react';
import { filter, findIndex } from 'lodash';
import '../css/other-design.scss';
export const OtherDesign = () => {
    const [selection, setSelection] = useState({});
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
        value: 'example'
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
        question: 'Turned in Cell Phone',
        field: 'question-5',
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
        question: 'if Yes Turned Cell Phone',
        field: 'question-6',
        type: 'text',
        show: false,
        condition: 'question-5',
        conditionval: 'Yes',
        value: '000-000-000'
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
        show: false,
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
        value: ''
    },
    {
        question: 'Android ID & Password',
        field: 'question-10',
        type: 'text',
        show: false,
        condition: 'question-8',
        conditionval: 'Android',
        value: ''
    }
    ]);
    const informationChanged = (field, value) => {
        const question = filter(questions, { condition: field });
        question.map(a => a.show = false);
        if (question.length !== 0) {
            let updateIndex = findIndex(question, { condition: field, conditionval: value });
            updateIndex = updateIndex == -1 ? 0 : updateIndex;
            question[updateIndex].show = question[updateIndex].conditionval == value;
            setQuestions([...questions]);
        }
        selection[field] = value;
        console.log(selection, question);
    }
    return (
        <div>
            {
                questions.map(function (value) {
                    return (
                        value?.show &&
                        <div className='container' key={value.field}>
                            <div className='question' >{value.question}
                            </div>

                            <div className='radio-btn'>
                                {
                                    value.type == 'radio' &&
                                    value.options.map(function (optVal) {
                                        return (
                                            <label key={value.field + '-' + optVal.value} >
                                                <input onClick={() => informationChanged
                                                    (value.field, optVal.value)}
                                                    type="radio"
                                                    value={optVal.value}
                                                    name={'rad' + value.field}
                                                />{optVal.label}
                                            </label>
                                        )
                                    })
                                }

                                {
                                    value.type == 'text' &&
                                    <input type='text'
                                        onChange={(event) => informationChanged(value.field, event.target.value)} ></input>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div >
    );
}