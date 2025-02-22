--for people to copy paste

CREATE TABLE Connection(
	id SERIAL PRIMARY KEY, --PRIMARY KEY constant adds the [PK] symbol to id. SERIAL constant helps increment the value every time we add a new row immediately
	name VARCHAR(255),
	contactEmail VARCHAR(255) UNIQUE NOT NULL, --NOT NULL constant makes the value can't have NULL at all. has to be inputted
	contactLinkedIn VARCHAR(255) UNIQUE, --UNIQUE constant
	education VARCHAR(255),
	experience VARCHAR(255),
	score FLOAT,
	hobbies VARCHAR(255)[], --in here, arrays are stored as JSON or array types
	funfact VARCHAR(255),
	enjoyTalking INT,
	event VARCHAR(255)
);