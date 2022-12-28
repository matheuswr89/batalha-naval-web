import colors from "../../styles/colors";
import Square from "../Square";
import { BoardTable, TD, Text } from "./style";

interface BoardProps {
  matriz: string[][];
  socket: any;
  room: string;
  id: string;
}

const BoardAdversary = ({ matriz, socket, room, id }: BoardProps) => {
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
                <Square
                  backgroudColor={colors.default}
                  isAdversary={true}
                  letter={lin}
                  x={i}
                  y={j}
                  id={id}
                  room={room}
                  socket={socket}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </BoardTable>
  );
};

export default BoardAdversary;
