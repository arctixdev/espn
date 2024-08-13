import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const players = [
  {
    slot: "QB",
    playerName: "None",
    points: "0",
    confidence: "0/10",
  },
  {
    slot: "RB",
    playerName: "None",
    points: "0",
    confidence: "0/10",
  },
  {
    slot: "RB",
    playerName: "None",
    points: "0",
    confidence: "0/10",
  },
  {
    slot: "WR",
    playerName: "None",
    points: "0",
    confidence: "0/10",
  },
  {
    slot: "WR",
    playerName: "None",
    points: "0",
    confidence: "0/10",
  },
  {
    slot: "TE",
    playerName: "None",
    points: "0",
    confidence: "0/10",
  },
  {
    slot: "FLEX",
    playerName: "None",
    points: "0",
    confidence: "0/10",
  },
  {
    slot: "D/ST",
    playerName: "None",
    points: "0",
    confidence: "0/10",    
},
{
    slot: "K",
    playerName: "None",
    points: "0",
    confidence: "0/10",
}
]

export function OptimalTable() {
  return (
    <Table>
      <TableCaption>Optimal player setup.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">SLOT</TableHead>
          <TableHead>Player</TableHead>
          <TableHead>Confidence</TableHead>
          <TableHead className="text-right">Predicted points</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {players.map((player) => (
          <TableRow key={player.slot}>
            <TableCell className="font-medium">{player.slot}</TableCell>
            <TableCell>{player.playerName}</TableCell>
            <TableCell>{player.confidence}</TableCell>
            <TableCell className="text-right">{player.points}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total points this week</TableCell>
          <TableCell className="text-right">0</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
