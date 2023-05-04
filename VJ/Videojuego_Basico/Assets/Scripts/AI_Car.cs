using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AI_Car : MonoBehaviour
{
    //Variables de referencia
    public enum AIMode {followPlayer,followWayPoints };
    [Header("COnfiguracion de la AI")] //Ingresa un texto al inicio 
    public AIMode aiMode;

    //Variables locales
    Vector3 targetPosition = Vector3.zero;
    Transform targetTransform = null;

    //Componenetes
    CarControl carcontrol;

    void Awake()//Awake is used to initialize any variables or game state before the game starts. Awake is called only once during the lifetime of the script instance. 
    {
        carcontrol = GetComponent<CarControl>();//Accedemos a componenetes del script CarControl
    }

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame. FixedUpdate should be used instead of Update when dealing with Rigidbody
    void FixedUpdate()
    {
        Vector2 inputVector = Vector2.zero; 
        switch(aiMode)
        {
            case AIMode.followPlayer:
            FollowPLayer();
            break;
        }
        
        inputVector.x = TurnTowardTarget();
        inputVector.y = 1.0f;

        carcontrol.SetInputVector(inputVector);
        
    }

    void FollowPLayer()
    {
        if(targetTransform==null){
            targetTransform =GameObject.FindGameObjectWithTag("Player").transform;}
        
        if(targetTransform!=null){
            targetPosition = targetTransform.position;}
    }

    float TurnTowardTarget()
    {
        Vector2 vectorToTarget = targetPosition - transform.position;
        vectorToTarget.Normalize();
        float angleToTarget = Vector2.SignedAngle(transform.up,vectorToTarget);
        angleToTarget *= -1;
        float steerAmount = angleToTarget / 45.0f;
        steerAmount = Mathf.Clamp(steerAmount,-1.0f,1.0f);
        return steerAmount;
    }
}
