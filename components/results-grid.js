import React from "react";
import { Box, Flex, Text } from "rebass";
import Loading from "react-loading";
import Table from "../components/table";

const ListItem = ({ children }) => (
  <Box
    as="li"
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    {children}
  </Box>
);

function ResultsGrid({ regions }) {
  return (
    <Box
      sx={{
        display: "grid",
        width: 4,
        gridGap: 3,
        gridTemplateColumns: [
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(3, 1fr)"
        ]
      }}
    >
      {regions.map((region, index) => (
        <Box
          key={index}
          sx={{
            p: 3,
            bg: index === 0 ? "primary" : "muted",
            color: index === 0 ? "background" : "text"
          }}
        >
          <Flex sx={{ alignItems: "center", justifyContent: "center" }}>
            <Text fontSize={4} mr={2} textAlign="center">
              {region.flag}
            </Text>{" "}
            <Text fontWeight={index === 0 ? "heading" : "body"}>
              {region.location}
            </Text>
          </Flex>
          {region.error && (
            <Box
              sx={{
                p: 3,
                my: 3,
                color: "text",
                bg: "brown",
                textAlign: "center"
              }}
            >
              {region.error}
            </Box>
          )}
          <Box as="ul" sx={{ listStyle: "none", pl: 0, ml: 0 }}>
            {region.loading && (
              <ListItem>
                <Loading type="bubbles" />
              </ListItem>
            )}
            {region.data.length > 0 && (
              <Table key={index} records={region.data} />
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default ResultsGrid;
