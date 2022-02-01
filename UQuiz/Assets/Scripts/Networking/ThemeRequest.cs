using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using SimpleJSON;
using System.Threading.Tasks;

public class ThemeRequest: MonoBehaviour
{
    const string url = "http://localhost:5000/themes";

    void Start() {
        StartCoroutine(GetThemes(url));
    }

    private IEnumerator GetThemes(string url)
    {
        using (UnityWebRequest request = UnityWebRequest.Get(url))
        {
            request.SetRequestHeader("Content-Type", "application/json");

            yield return request.SendWebRequest();

            if (request.result != UnityWebRequest.Result.Success)
            {
                Debug.Log(request.error);
            }
            else
            {
                //Debug.Log(request.downloadHandler.text);

                JSONArray itemsData = (JSONArray) JSON.Parse(request.downloadHandler.text);
                JSONNode themes = itemsData["theme_name"];

                foreach (JSONNode i in itemsData) {
                    Debug.Log("The generated item is: \nName: " + i["theme_name"]);
                }
            }
        }
    }
}
