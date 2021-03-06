import React, {useState} from 'react';

const Project = ({category}) => {
    const [portfolio] = useState([
        {
            name: 'Note Taker',
            category: 'portfolio',
            description: 'It helps keep track of your ideas, plans, and class notes.',
            onClick: "https://tranquil-depths-19263.herokuapp.com/",
        },
        {
            name: 'Course Critic',
            category: 'portfolio',
            description: 'Its a helpful site for prospective students to receive reviews from actual strudents.',
            src1: 'https://coursecritic.herokuapp.com/',
        },
        {
            name: 'Keeping Up',
            category: 'portfolio',
            description: 'Its a helpful site for customers who want to keep track of their expenses.',
            src1: 'https://protected-basin-80313.herokuapp.com/',
        },
        {
            name: 'One less Step',
            category: 'portfolio',
            description: 'Its a helpful for web developers that it helps create their readme.md by answering a few questions.',
            src1: 'https://github.com/zaira222/One-less-step',
        },
        {
            name: 'finding time',
            category: 'portfolio',
            description: 'Can be used in everyday life for reminders.',
            src1: 'https://zaira222.github.io/finding-time/'
        },
        {
            name: 'future in progress',
            category: 'portfolio',
            description: 'Previous website that had my resume done with HTML and CSS.',
            src1: 'https://zaira222.github.io/future-in-progress/'
        },
    ]);
    
    const currentPortfolios = portfolio.filter(portfolio => portfolio.category === category);

    return (
        <div>
            {currentPortfolios.map((image, i) => (
                <img
                    src={require(`../../assets/small/${category}/${i}.jpg`)}
                    alt={image.name}
                    className="img-thumbnail mx-1"
                    key={image.name} 

                    />
            ))}





        </div>
        
    )
}

export default Project;