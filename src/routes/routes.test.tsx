import { screen, waitFor } from "@testing-library/react-native";
import { Routes } from "@routes/index";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { render } from "@__tests__/utils/customRender";

describe("Routes", () => {
  it('should be render Search screen when not city selected', async () => {
    render(<Routes />);

    const title = await waitFor(() => screen.findByText(/^escolha um local/i));
    expect(title).toBeTruthy();
  });

  it('should be render Dashboard screen when has city selected', async () => {
    const city = {
      id: '1',
      name: 'São Paulo',
      latitude: 123,
      longitude: 456
    }
    
    await saveStorageCity(city);
    const { debug } = render(<Routes />);

    debug();
  });
})