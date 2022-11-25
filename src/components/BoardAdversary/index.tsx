import colors from "../../styles/colors";
import Square from "../Square";
import { BoardTable, TD, Text } from "./style";

interface BoardProps {
  matriz: string[][];
  clickable: boolean;
}

const BoardAdversary = ({ matriz }: BoardProps) => {
  let key = 0;
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  return (
    <BoardTable>
      <tbody>
        {matriz.map((col, i) => (
          <tr key={key++}>
            <TD className={`number${i}`}>{i}</TD>
            {col.map((lin, j) => (
              <td key={key++}>
                {i === 0 && <Text>{letters[j]}</Text>}
                <Square backgroudColor={colors.default} isAdversary={true} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </BoardTable>
  );
};

export default BoardAdversary;
