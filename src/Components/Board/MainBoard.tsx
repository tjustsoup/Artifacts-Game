import { Box, Button, Card, CardContent, Grid } from "@mui/material";

export default function MainBoard() {
  // Bits
  const rows = ["1", "2", "3", "4"];
  const columns = ["A", "B", "C", "D"];
  
  if (document) {
    console.log(document.getElementById("1A")?.offsetWidth)
  }

  return (
    <Box>
      {document === null ? (null) : (
      <Grid container spacing={1}>
        {rows.map((r: string) => {
          return columns.map((c: string) => (
            <Grid item xs={3}>
              {/* @ts-ignore */}
              <Card id={r+c} sx={{ height: document.getElementById(r+c)?.offsetWidth }}>
                <CardContent>Howdy</CardContent>
              </Card>
            </Grid>
          ));
        })}
      </Grid>
      )}
    </Box>
  );
}
