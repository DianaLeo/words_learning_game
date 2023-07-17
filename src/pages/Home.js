import styles from '../App.module.css';
import { useState } from 'react';





function Home() {
    const [colors, setColors] = useState([
        { id: 0, color: 'red' },
        { id: 1, color: 'orange' },
        { id: 2, color: 'yellow' },
        { id: 3, color: 'green' },
        { id: 4, color: 'blue' },
        { id: 5, color: 'purple' },
        { id: 6, color: 'pink' }
    ])
    const colorsRandomlySorted = [...colors];
    colorsRandomlySorted.sort(() => { return 0.5 - Math.random() });

    var currentColor = '';


    function Color(props) {
        const color = props.color;
        const handler = (e) => {
            currentColor = props.color;
            //e.target.style.border = '2px solid black';
        }
        const handler2 = () => {
            if (props.color === currentColor) {
                console.log(props.color);
                const newColors = [...colors];
                newColors.splice(props.id, 1);
                newColors.map((item, index) => { item.id = index });
                setColors(newColors);
            }

        }

        if (props.type === 'color') {
            return <li><span
                className={styles.span}
                style={{ backgroundColor: `${color}` }}
                onClick={e=>handler(e)}
            ></span></li>
        } else {
            return <li><span
                className={styles.span}
                onClick={handler2}
            >{color}</span></li>
        }
    }



    return (
        <>
            <h1>Rainbow Colors</h1>
            <p>Color words learning for 3-5 kids</p>
            <p>Click a color from left and its corresponding word from right to remove it.  </p>
            <div className={styles.container}>
                <div className={styles.div}>
                    <ul className={styles.list}>
                        {colors.map(color => <Color type='color' key={color.id} id={color.id} color={color.color} />)}
                    </ul>
                    <ul className={styles.list}>
                        {colorsRandomlySorted.map(color => <Color type='text' key={color.id} id={color.id} color={color.color} />)}
                    </ul>
                </div>
                <p>{currentColor}</p>
            </div>

        </>
    )
}

function Line() {
    const [ifMouseDown, setIfMouseDown] = useState(false);
    const [startPositionX, setStartPositionX] = useState(0);
    const [startPositionY, setStartPositionY] = useState(0);
    const [endPositionX, setEndPositionX] = useState(0);
    const [endPositionY, setEndPositionY] = useState(0);
    var offsetParentTop = 0;
    var offsetParentLeft = 0;

    const onMouseDownHandler = (e) => {
        console.log(e.pageX, e.pageY)
        offsetParentTop = e.target.offsetParent.offsetTop;
        offsetParentLeft = e.target.offsetParent.offsetLeft;
        console.log(offsetParentLeft, offsetParentTop);
        setIfMouseDown(true);
        setStartPositionX(e.pageX);
        setStartPositionY(e.pageY);
    };

    const onMouseUpHandler = (e) => {
        console.log(e.pageX, e.pageY)
        setIfMouseDown(false);

    };
    const onMouseMoveHandler = (e) => {
        if (ifMouseDown) {
            //console.log(e.pageX, e.pageY);
            setEndPositionX(e.pageX);
            setEndPositionY(e.pageY);
        }
    };


    return (
        <>
            <p>{startPositionX},{startPositionY}, {endPositionX},{endPositionY}</p>
            <div
                className={styles.lineContainer}
                onMouseDown={e => onMouseDownHandler(e)}
                onMouseMove={e => onMouseMoveHandler(e)}
                onMouseUp={e => onMouseUpHandler(e)}
            >
                <div
                    className={styles.line}
                    style={{ left: `${startPositionX - 8}px`, top: `${startPositionY - 133}px`, width: `${endPositionX - startPositionX}px`, height: `${endPositionY - startPositionY}px` }}
                ></div>
            </div>
        </>
    )
}

export default Home;