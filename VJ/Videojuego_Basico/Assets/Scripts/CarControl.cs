using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CarControl : MonoBehaviour
{
    [Header("Car settings")]
    public float driftFactor = 0.95f; //Usamos variables publicas para interactuar con ellas en unity
    public float accelerationFactor = 30.0f;
    public float turnfactor = 3.5f;
    public float maxSpeed = 20;
    private int vidaPersonaje = 3;
    [SerializeField] Contador contar;

    //Local variables
    float accelerationInput = 0;
    float steeringInput = 0;

    float rotationAngle = 0;
    float velocityVsUo = 0;

    Rigidbody2D carRigidbody2D;

    void Awake()
    {
        carRigidbody2D = GetComponent<Rigidbody2D>();
    }

    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void FixedUpdate()
    {
        ApplyEngineForce();
        KillOrthogonalVelocity();
        ApplySteering();
    }

    void ApplyEngineForce()
    {
        velocityVsUo = Vector2.Dot(transform.up, carRigidbody2D.velocity);

        if (velocityVsUo > maxSpeed && accelerationInput > 0)
            return;

        if (velocityVsUo < -maxSpeed * 0.5 && accelerationInput < 0)
            return;

        if (carRigidbody2D.velocity.sqrMagnitude > maxSpeed * maxSpeed && accelerationInput > 0)
            return;

        if (accelerationInput == 0)
            carRigidbody2D.drag = Mathf.Lerp(carRigidbody2D.drag, 3.0f, Time.fixedDeltaTime * 3);
        else carRigidbody2D.drag = 0;

        Vector2 engineForceVector = transform.up * accelerationInput * accelerationFactor;
        carRigidbody2D.AddForce(engineForceVector, ForceMode2D.Force);
    }

    void ApplySteering()
    {
        float minSpeedBeforeAllowTurningFactor = (carRigidbody2D.velocity.magnitude / 8);
        minSpeedBeforeAllowTurningFactor = Mathf.Clamp01(minSpeedBeforeAllowTurningFactor);

        rotationAngle -= steeringInput * turnfactor;
        carRigidbody2D.MoveRotation(rotationAngle);

    }

    public void SetInputVector(Vector2 inputVector)
    {
        steeringInput = inputVector.x;
        accelerationInput = inputVector.y;
    }

    void KillOrthogonalVelocity()
    {
        Vector2 forwardVelocity = transform.up * Vector2.Dot(carRigidbody2D.velocity, transform.up);
        Vector2 rightVelocity = transform.right * Vector2.Dot(carRigidbody2D.velocity, transform.right);

        carRigidbody2D.velocity = forwardVelocity + rightVelocity * driftFactor;
    }

    private void CausarHerida()
    {
        if(vidaPersonaje>0)
        {
            vidaPersonaje--;
            contar.RestaCorazones(vidaPersonaje);
            if(vidaPersonaje==0){
                Debug.Log("Game Over");
            }
        }
    }
}