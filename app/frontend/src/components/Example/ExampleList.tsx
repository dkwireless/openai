import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "I cannot log in in seller module, what should I do?",
        value: "I cannot log in in seller module, what should I do?"
    },
    { text: "What should I do when price imports are not successful?", value: "What should I do when price imports are not successful?" },
    { text: "If I get the “400 Bad Request” error message, what should I do?", value: "If I get the “400 Bad Request” error message, what should I do?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
