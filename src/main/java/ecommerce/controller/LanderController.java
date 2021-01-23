package ecommerce.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.google.gson.Gson;

import ecommerce.bean.Book;
import ecommerce.bean.Image;

@RestController
public class LanderController {

	@RequestMapping(value = "/api/v1/image", method = RequestMethod.GET)
	public Image[] image() {
		Image[] images;
		try {
			images = new Gson().fromJson(getText("https://s3-ap-southeast-1.amazonaws.com/he-public-data/bookimage816b123.json"), Image[].class);
		} catch (IOException e) {
			images = null;
		}
		return images;
	}

	@RequestMapping(value = "/api/v1/book", method = RequestMethod.GET)
	public Book[] book() {
		RestTemplate restTemplate = new RestTemplate();
		Book[] books = restTemplate.getForObject(
				"https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json", Book[].class);
		return books;
	}

	String getText(String url) throws IOException {
		HttpURLConnection connection = (HttpURLConnection) new URL(url).openConnection();
		// add headers to the connection, or check the status if desired..

		// handle error response code it occurs
		int responseCode = connection.getResponseCode();
		InputStream inputStream;
		if (200 <= responseCode && responseCode <= 299) {
			inputStream = connection.getInputStream();
		} else {
			inputStream = connection.getErrorStream();
		}

		BufferedReader in = new BufferedReader(new InputStreamReader(inputStream));

		StringBuilder response = new StringBuilder();
		String currentLine;

		while ((currentLine = in.readLine()) != null)
			response.append(currentLine);

		in.close();
		return response.toString();
	}
}
