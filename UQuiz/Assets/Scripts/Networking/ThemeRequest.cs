using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using SimpleJSON;
using UnityEngine.UI;

    public class ThemeRequest: MonoBehaviour
    {
        Dropdown dropdown;
        string theme;
        private string test;
        string[] themesArray;
        List<string> items;
        
        const string url = "http://localhost:5000/themes";

        void Start() {
            dropdown = GetComponent<Dropdown>();
            items = new List<string>();
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
                        items.Add(i["theme_name"]);
                    }
                    foreach (var option in items) {
                        Debug.Log(option);
                        dropdown.options.Add(new Dropdown.OptionData() { text = option});
                    }
                    dropdown.value=1;
                }
            }
        }
    }
