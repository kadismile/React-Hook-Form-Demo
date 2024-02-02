import { Form, Button, Card, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";


const AdvancedFieldValidation = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const hasErrors = errors.name || errors.Email || errors.address;

  const onSubmit = () => {
    alert("Submit");
  };

  return (
    <Card className="my-4">
      <Card.Title className="mt-3 mx-auto">Advanced Validation Form</Card.Title>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              className="fs-sm"
              type="text"
              {...register("firstName", {
                validate: {
                  stringValue: (value) => value === 'Mary'
                }
              })}
              isInvalid={!!errors.firstName}
            />
            {console.log({ errors })}
            {errors.firstName && <span style={{ color: "red" }}> Name must be Mary </span>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Age</Form.Label>
            <Form.Control
              className="fs-sm"
              type="number"
              {...register("age", {
                validate: {
                  positiveNumber: (value) => parseFloat(value) > 0,
                  lessThanHundred: (value) => parseFloat(value) < 200
                }
              })}
            />
            {console.log({ errors })}
            {errors.age && errors.age.type === "positiveNumber" && <span style={{ color: "red" }}> Your age is invalid </span>}
            {errors.age && errors.age.type === "lessThanHundred" && <span style={{ color: "red" }}> Your age should be greater than 200 </span>}

          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="mx-2"
            style={{ width: 80 }}
            disabled={hasErrors}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AdvancedFieldValidation;
