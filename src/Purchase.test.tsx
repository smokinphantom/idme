import { render, screen } from '@testing-library/react';
import { Purchase } from './Purchase';

// Mock fetch
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            "id": 1,
            "location": "https://picsum.photos/id/0/200",
            "purchaseDate": "2020-12-27T00:00:00.000Z",
            "category": "Food",
            "description": "connecting the card won&#x27;t do anything, we need to back up the digital HDD driver!",
            "price": 99882,
            "name": "auxiliary generating microchip"
          },
          {
            "id": 2,
            "location": "https://picsum.photos/id/1/200",
            "purchaseDate": "2020-12-28T00:00:00.000Z",
            "category": "Technology",
            "description": "I&#x27;ll synthesize the primary SMTP firewall, that should monitor the ADP feed!",
            "price": 69706,
            "name": "1080p backing up port"
          },
        ]),
    })
  ) as jest.Mock;
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders Purchases text', () => {
  render(<Purchase />);
  const purchaseText = screen.getByText('Purchases');
  expect(purchaseText).toBeInTheDocument();
});

describe('renders mobile view', () => {
  it("should render a table with API data", async () => {
    // Mock resize event
    const mockResize = jest.fn();
    jest.spyOn(window, "addEventListener").mockImplementation((event, handler) => {
      if (event === "resize") {
        mockResize.mockImplementation(handler as () => void);
      }
    });

    // Trigger the resize handler
    global.innerWidth = 1024;
    global.innerHeight = 768;
    render(<Purchase />);
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  })
});
