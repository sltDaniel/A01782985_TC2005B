using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class InputCar : MonoBehaviour
{
    CarControl carControl;

    void Awake()
    {
        carControl = GetComponent<CarControl>();
    }

    // Update is called once per frame
    void Update()
    {
        Vector2 inputVector = Vector2.zero;
        inputVector.x = Input.GetAxis("Horizontal");
        inputVector.y = Input.GetAxis("Vertical");

        carControl.SetInputVector(inputVector);
    }
}
