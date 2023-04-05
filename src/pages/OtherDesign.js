import '../css/other-design.scss';
export const OtherDesign = () => {
    const questions = [{
        question: 'Question 1',
        field: 'question-1',
        options: [{
            label:'YES',
            value:'Yes'
        },{
            label:'NO',
            value:'NO'
        },{
            label:'N/A',
            value:'NA'
        }]
    }, {
        question: 'Themes and styles also help keep your document coordinated. When you click Design and choose a new Theme, the pictures, charts, and SmartArt graphics change to match your new theme. When you apply styles, your headings change to match the new theme.',
        field: 'question-2',
        options: [{
            label:'YES',
            value:'Yes'
        },{
            label:'NO',
            value:'NO'
        },{
            label:'N/A',
            value:'NA'
        }]
    }]
    const informationChanged = (field, value) => {
        console.log(field, value);
    }
    return (
        <div>
            {
                questions.map(function (value) {
                    return (
                        <div className='container' key={value.field}>
                            <div className='question' >{value.question}
                            </div>

                            <div className='radio-btn'>
                                {
                                    value.options.map(function (optVal) {
                                        return (
                                            <label key={value.field + '-'+optVal.value} > <input onClick={() => informationChanged
                                                (value.field, optVal.value)} type="radio" value={optVal.value} name={'rad' + value.field} />{ optVal.label } </label>

                            )
                                    })
                                }
                        </div>
                        </div>
    )
})
            }
        </div >
    );
}