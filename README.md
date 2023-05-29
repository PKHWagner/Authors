A full stack MERN app where you can see a list of Authors. You can add new Authors and edit existing ones. I am using:
<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#00D8FF" d="M128.001 146.951C138.305 146.951 146.657 138.598 146.657 128.295C146.657 117.992 138.305 109.639 128.001 109.639C117.698 109.639 109.345 117.992 109.345 128.295C109.345 138.598 117.698 146.951 128.001 146.951Z"/><path fill-rule="evenodd" stroke="#00D8FF" stroke-width="8.911" d="M128.002 90.3633C153.05 90.3633 176.319 93.9575 193.864 99.9976C215.003 107.275 228 118.306 228 128.295C228 138.704 214.226 150.423 191.525 157.944C174.363 163.63 151.779 166.598 128.002 166.598C103.624 166.598 80.5389 163.812 63.1834 157.881C41.2255 150.376 28 138.506 28 128.295C28 118.387 40.4096 107.441 61.2515 100.175C78.8617 94.0353 102.705 90.3633 127.998 90.3633H128.002Z" clip-rule="evenodd"/><path fill-rule="evenodd" stroke="#00D8FF" stroke-width="8.911" d="M94.9811 109.438C107.495 87.7402 122.232 69.3783 136.23 57.1971C153.094 42.5206 169.144 36.7728 177.796 41.7623C186.813 46.9623 190.084 64.7496 185.259 88.1712C181.614 105.879 172.9 126.925 161.021 147.523C148.842 168.641 134.897 187.247 121.09 199.315C103.619 214.587 86.7284 220.114 77.8833 215.013C69.3003 210.067 66.0181 193.846 70.1356 172.161C73.6145 153.838 82.3451 131.349 94.977 109.438L94.9811 109.438Z" clip-rule="evenodd"/><path fill-rule="evenodd" stroke="#00D8FF" stroke-width="8.911" d="M95.0123 147.578C82.4633 125.904 73.9194 103.962 70.3531 85.7517C66.0602 63.8109 69.0954 47.0355 77.7401 42.0315C86.7485 36.8163 103.792 42.866 121.674 58.7437C135.194 70.7479 149.077 88.8052 160.99 109.383C173.204 130.481 182.358 151.856 185.919 169.844C190.425 192.608 186.778 210.001 177.941 215.116C169.367 220.08 153.676 214.825 136.945 200.427C122.809 188.263 107.685 169.468 95.0123 147.578Z" clip-rule="evenodd"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#fff" d="M228 182.937C225.089 184.04 221.875 184.037 218.965 182.931C216.056 181.824 213.652 179.69 212.209 176.932C203.146 163.365 193.138 150.41 183.519 137.177L179.348 131.617C167.894 146.963 156.44 161.697 145.987 176.988C144.625 179.624 142.352 181.675 139.59 182.759C136.828 183.844 133.766 183.887 130.975 182.882L173.955 125.223L133.977 73.1236C136.855 72.0845 140.003 72.0702 142.89 73.0832C145.777 74.0962 148.226 76.0744 149.824 78.6838C159.109 92.2506 169.396 105.206 179.626 118.94C189.913 105.317 200.088 92.3062 209.596 78.8506C210.965 76.2574 213.24 74.258 215.988 73.2328C218.735 72.2076 221.764 72.2281 224.497 73.2904L208.984 93.8631C202.034 103.037 195.195 112.267 187.967 121.219C187.384 121.741 186.918 122.379 186.599 123.093C186.28 123.807 186.115 124.58 186.115 125.362C186.115 126.143 186.28 126.916 186.599 127.63C186.918 128.344 187.384 128.982 187.967 129.504C201.256 147.13 214.433 164.811 228 182.937V182.937Z"/><path fill="#fff" d="M28 124.5C29.1676 118.94 29.8905 112.879 31.5029 107.208C41.122 73.0129 80.3214 58.7788 107.288 79.9632C123.079 92.3624 127.027 109.933 126.249 129.727H37.2855C35.8399 165.09 61.3611 186.441 93.9994 175.543C99.2938 173.649 104.033 170.467 107.79 166.283C111.547 162.099 114.202 157.045 115.517 151.578C117.241 146.018 120.021 145.073 125.303 146.685C124.433 153.454 122.04 159.938 118.303 165.649C114.567 171.36 109.584 176.149 103.73 179.657C94.0573 184.947 82.96 187.042 72.0247 185.644C61.0894 184.246 50.8763 179.426 42.8457 171.873C34.9011 162.94 30.0973 151.654 29.1676 139.735C29.1676 137.845 28.4448 135.954 28.0556 134.175C28.0185 130.876 28 127.651 28 124.5ZM37.3967 122.109H117.853C117.352 96.4769 101.172 78.2951 79.5986 78.1283C55.5785 77.7947 38.3976 95.5873 37.3411 121.998L37.3967 122.109Z"/></svg>
<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#023430" rx="60"/><path fill="#10AA50" d="M171.173 107.591C160.636 61.1097 138.676 48.7357 133.074 39.9886C130.764 36.1353 128.717 32.1299 126.949 28C126.653 32.1292 126.109 34.7307 122.599 37.862C115.552 44.1454 85.6217 68.5354 83.1028 121.348C80.756 170.59 119.303 200.953 124.395 204.092C128.311 206.019 133.08 204.133 135.407 202.364C153.988 189.612 179.376 155.614 171.193 107.591"/><path fill="#B8C4C2" d="M128.545 177.871C127.575 190.059 126.88 197.141 124.416 204.106C124.416 204.106 126.033 215.709 127.169 228H131.188C132.147 219.345 133.61 210.753 135.572 202.268C130.369 199.708 128.745 188.566 128.545 177.871Z"/><path fill="#12924F" d="M135.565 202.275C130.307 199.846 128.786 188.469 128.552 177.871C129.852 160.388 130.231 142.849 129.688 125.326C129.412 116.132 129.818 40.1676 127.423 29.0461C129.062 32.8129 130.949 36.4662 133.074 39.9818C138.676 48.7358 160.643 61.1097 171.173 107.591C179.376 155.532 154.126 189.44 135.565 202.275Z"/></svg>
and
<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#81CD39" d="M119.878 31.1164C124.797 28.3008 131.203 28.2883 136.117 31.1164C160.839 45.0855 185.569 59.0332 210.287 73.0108C214.937 75.6296 218.046 80.8038 217.999 86.1608V170.206C218.034 175.785 214.617 181.083 209.712 183.642C185.071 197.535 160.442 211.444 135.805 225.337C130.786 228.207 124.251 227.986 119.387 224.88C112 220.598 104.6 216.336 97.2121 212.058C95.7022 211.158 94.0004 210.442 92.9345 208.978C93.8766 207.708 95.5618 207.55 96.9309 206.995C100.014 206.014 102.847 204.44 105.679 202.913C106.396 202.423 107.27 202.611 107.957 203.049C114.274 206.671 120.536 210.399 126.874 213.986C128.226 214.767 129.595 213.73 130.751 213.086C154.931 199.419 179.141 185.805 203.318 172.134C204.214 171.703 204.709 170.752 204.636 169.771C204.653 142.046 204.64 114.317 204.645 86.5918C204.747 85.4785 204.103 84.455 203.096 83.999C178.541 70.1702 153.997 56.3205 129.446 42.4882C128.575 41.8893 127.426 41.8878 126.554 42.4837C102.002 56.3205 77.4638 70.1832 52.9124 84.011C51.9092 84.4675 51.236 85.4745 51.3554 86.5918C51.3596 114.317 51.3554 142.046 51.3554 169.775C51.2682 170.756 51.801 171.687 52.6906 172.109C59.2422 175.824 65.8024 179.513 72.3582 183.216C76.0516 185.203 80.5863 186.385 84.6555 184.862C88.2463 183.574 90.7633 179.909 90.6948 176.097C90.7288 148.534 90.6778 120.967 90.7203 93.4078C90.6309 92.1841 91.7912 91.1731 92.981 91.2885C96.1292 91.267 99.281 91.2461 102.429 91.297C103.743 91.267 104.647 92.5847 104.485 93.8174C104.472 121.555 104.519 149.293 104.464 177.03C104.472 184.423 101.435 192.467 94.5973 196.084C86.1737 200.447 75.7619 199.522 67.4399 195.338C60.2355 191.742 53.3603 187.498 46.2838 183.646C41.3661 181.101 37.966 175.782 38.0006 170.207V86.1608C37.949 80.6929 41.1825 75.4248 45.9764 72.8445C70.6133 58.9408 95.2461 45.0261 119.878 31.1164Z"/><path fill="#81CD39" d="M141.372 89.3351C152.117 88.6433 163.62 88.9255 173.289 94.2185C180.776 98.2754 184.926 106.789 185.058 115.106C184.849 116.227 183.676 116.846 182.605 116.769C179.488 116.765 176.369 116.812 173.252 116.748C171.929 116.799 171.161 115.58 170.995 114.411C170.099 110.431 167.928 106.49 164.183 104.57C158.433 101.692 151.767 101.837 145.497 101.897C140.92 102.139 135.998 102.536 132.12 105.227C129.143 107.266 128.239 111.382 129.301 114.697C130.303 117.077 133.05 117.845 135.299 118.553C148.248 121.94 161.97 121.602 174.672 126.059C179.931 127.876 185.075 131.409 186.875 136.915C189.23 144.295 188.198 153.115 182.947 159.039C178.689 163.914 172.488 166.568 166.303 168.009C158.075 169.844 149.536 169.891 141.18 169.076C133.323 168.18 125.146 166.116 119.081 160.763C113.894 156.259 111.361 149.241 111.612 142.469C111.672 141.325 112.811 140.527 113.907 140.621C117.046 140.596 120.186 140.587 123.325 140.626C124.58 140.536 125.509 141.62 125.574 142.802C126.152 146.593 127.577 150.573 130.884 152.82C137.264 156.937 145.271 156.655 152.577 156.77C158.63 156.502 165.425 156.421 170.364 152.42C172.97 150.138 173.742 146.32 173.038 143.036C172.275 140.263 169.374 138.971 166.883 138.126C154.1 134.083 140.224 135.55 127.565 130.977C122.425 129.161 117.455 125.727 115.481 120.447C112.726 112.974 113.988 103.73 119.789 98.0061C125.445 92.312 133.609 90.1192 141.372 89.3346V89.3351"/></svg>