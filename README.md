# PC Build Backend

This repository contains the backend code for a PC building web application. The backend is built using Node.js with Express.js for handling API requests, MongoDB for database management, and Mongoose for database modeling.

## Features

- CRUD operations for PC components (CPU, GPU, motherboard, RAM, storage)
- User authentication and authorization
- Integration with MongoDB Atlas for cloud-based database management
- MVC (Model-View-Controller) architecture for organized code structure
- Web scraping functionality to fetch PC component data from external sources
- API endpoints for retrieving PC component data

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Axios (for web scraping)
- JWT (JSON Web Tokens) for user authentication
- MVC architecture

## Getting Started

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies.
4. Configure environment variables by creating a `.env` file in the root of the project. Example:

PORT=5000
MONGODB_URI=mongodb://localhost:27017/pc_building_app
JWT_SECRET=mysecretkey

5. Run the server locally.

## Contributing

Contributions to the project are welcome! If you have any ideas for improvements or bug fixes, feel free to submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

[Risvan T](https://github.com/RisvanBCA2022)

## Contact

For inquiries, you can reach out to [risvanta960@gmail.com](mailto:risvanta960@gmail.com).
