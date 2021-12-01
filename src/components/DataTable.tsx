import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Text,
  Progress,
  Flex,
  Box,
  Image,
} from '@chakra-ui/react';

import dataRaw from '../../dataRaw.json';
import styles from '../styles/dataTable';

const DataTable = () => {
  return (
    <Table variant="simple" css={styles.table}>
      <Thead>
        <Tr>
          <Th color="white" borderBottom="none">
            Collection
          </Th>
          <Th color="white" borderBottom="none" width={220}>
            Grape Community Strength*
          </Th>
          <Th color="white" borderBottom="none">
            TVL (SOL)**
          </Th>
          <Th color="white" borderBottom="none">
            NFTs Average
          </Th>
          <Th color="white" borderBottom="none">
            Unique Holders
          </Th>
          <Th color="white" borderBottom="none" width={220}>
            Grape Holder Score
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {dataRaw.map((item, key) => (
          <Tr key={key} mb={5} css={styles.tableRow}>
            <Td>
              <Box position="relative" paddingLeft="70px">
                <Image
                  borderRadius="full"
                  boxSize="75px"
                  objectFit="cover"
                  src={item.image}
                  alt={item.name}
                  mr={4}
                  position="absolute"
                  top="50%"
                  left={-6}
                  backgroundColor="gray"
                  transform="translateY(-50%)"
                />
                {item.name}
              </Box>
            </Td>
            <Td>
              <Flex alignItems="center">
                <Progress
                  borderTopLeftRadius="1rem"
                  borderBottomLeftRadius="1rem"
                  flex="auto"
                  sx={{
                    '& > div': {
                      background:
                        'linear-gradient(276deg, #0FE2DF 5.96%, #8870F2 86.08%, #9E5BF6 96.45%)',
                      borderEndRadius: '1rem',
                    },
                  }}
                  height="24px"
                  value={item.community_strength}
                />
                <Box
                  w="65px"
                  borderRadius={4}
                  textAlign="center"
                  p="0.5rem"
                  whiteSpace="nowrap"
                  bg="black"
                >
                  {`${item.community_strength}%`}
                </Box>
              </Flex>
            </Td>
            <Td>{item.tvl}</Td>
            <Td>
              <Box
                width="50px"
                borderRadius={4}
                textAlign="center"
                p="0.5rem"
                whiteSpace="nowrap"
                bg="black"
              >
                {item.nft_average}
              </Box>
            </Td>
            <Td>{item.unique_holders}</Td>
            <Td>
              <Flex alignItems="center">
                <Progress
                  borderTopLeftRadius="1rem"
                  borderBottomLeftRadius="1rem"
                  flex="auto"
                  sx={{
                    '& > div': {
                      background:
                        'linear-gradient(276deg, #0FE2DF 5.96%, #8870F2 86.08%, #9E5BF6 96.45%)',
                      borderEndRadius: '1rem',
                    },
                  }}
                  height="24px"
                  value={item.grape_holder_score}
                />
                <Box
                  w="65px"
                  borderRadius={4}
                  textAlign="center"
                  p="0.5rem"
                  whiteSpace="nowrap"
                  bg="black"
                >
                  {`${item.grape_holder_score}%`}
                </Box>
              </Flex>
            </Td>
          </Tr>
        ))}
      </Tbody>
      <TableCaption>
        <Text>* Percentage of total NFTs held by the community</Text>
        <Text>** The current floor price * number of NFTs held by community</Text>
        <Text>
          *** Percentage of verified holders against overall holders who are members of the
          community
        </Text>
      </TableCaption>
    </Table>
  );
};

export default DataTable;
