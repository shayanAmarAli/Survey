import { useState } from 'react';
import { Box, Text, Container, Select } from '@chakra-ui/react';
import { AiOutlineFlag } from 'react-icons/ai';

const countries = [
  { code: 'us', name: 'United States', icon: AiOutlineFlag, currency: 'USD' },
  // Add more countries here
];

const Home: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleCountrySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const countryCode = e.target.value;
    const country = countries.find((country) => country.code === countryCode);
    if (country) {
      setSelectedCountry(country);
    }
  };

  return (
    <Container maxW="md" py={8}>
      <Text fontSize="xl" fontWeight="semibold" mb={4}>
        Select a Country
      </Text>
      <Select
        value={selectedCountry.code}
        onChange={handleCountrySelect}
        placeholder="Select a country"
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </Select>
      {selectedCountry && (
        <Box mt={4}>
          <Text>
            Selected Country: {<selectedCountry.icon />} {selectedCountry.name}
          </Text>
          <Text>Currency: {selectedCountry.currency}</Text>
        </Box>
      )}
    </Container>
  );
};

export default Home;
