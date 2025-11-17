import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { WATCHLIST_TABLE_HEADER } from "@/lib/constants";

export default function WatchlistTable() {
  const sampleData = [
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      price: "$173.45",
      change: "+1.23%",
      volume: "24.5M",
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corp.",
      price: "$342.12",
      change: "-0.56%",
      volume: "18.2M",
    },
    {
      symbol: "TSLA",
      name: "Tesla, Inc.",
      price: "$201.78",
      change: "+2.87%",
      volume: "12.1M",
    },
  ];

  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {WATCHLIST_TABLE_HEADER.map((col) => (
              <TableHead key={col} className="text-left">
                {col}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sampleData.map((row) => (
            <TableRow key={row.symbol}>
              <TableCell className="text-left">{row.symbol}</TableCell>
              <TableCell className="text-left">{row.name}</TableCell>
              <TableCell className="text-left">{row.price}</TableCell>
              <TableCell className="text-left">{row.change}</TableCell>
              <TableCell className="text-left">{row.volume}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
